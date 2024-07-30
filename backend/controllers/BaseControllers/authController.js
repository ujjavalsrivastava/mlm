const Joi = require("joi");
const User_Master = require("../../models/Base/UserMaster");
const { Op } = require("sequelize");
const Emp_Master_Hd = require("../../models/Employee/EmpMasterHd");
const User_Unit = require("../../models/Base/UserUnit");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Unit = require("../../models/Base/Unit");
const { Response } = require("../../utils/common/response");

const userSignInSchema = Joi.object({
	username: Joi.string().required(),
	password: Joi.string().required(),
	unitCode: Joi.string().required(),
	finYear: Joi.string().required(),
});

/**
 * Function for user sign-in process.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @return {Object} JSON response with status and message.
 * @throws {Error} If validation fails.
 * @throws {Error} If user not found.
 * @throws {Error} If invalid password.
 * @throws {Error} If unit not found.
 * @author Madhur
 */

const userSignIn = async (req, res, next) => {
	try {
		const { error } = userSignInSchema.validate(req.body);
		if (error) {
			return Response(res, "fail", error.details[0].message);
		}

		const user = await User_Master.findOne({
			where: {
				user_name: req.body.username,
				validity: "Y",
				valid_from: {
					[Op.lte]: new Date(),
				},
				valid_to: {
					[Op.gte]: new Date(),
				},
			},
			attributes: [
				"emp_name",
				"user_name",
				"password",
				"all_privilege",
				"user_id",
				"emp_id",
			],
			include: [
				{
					model: User_Unit,
					attributes: ["unit_cd"],
					as: "userUnits",
					include: [{ model: Unit, attributes: ["name"], as: "unitMaster" }],
				},
				{ model: Emp_Master_Hd, attributes: ["emp_number"] },
			],
		});

		if (!user) {
			return Response(res, "fail", "User not found");
		}

		if (user.userUnits.length === 0) {
			return Response(res, "fail", "Invalid Unit, Please try again!");
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password,
		);
		if (!validPassword) {
			return Response(res, "fail", "Invalid Password, Please try again!");
		}

		const userDetails = {
			username: user.user_name,
			empName: user.user_name,
			allPrivilege: user.all_privilege,
			id: user.user_id,
			empId: user.emp_id,
			finYear: req.body.finYear,
			unitCode: req.body.unitCode,
			unitName: user.userUnits[0].unitMaster.name,
			address: user.address,
		};

		const expirationTimeInSeconds = 3600; // 1 hour

		const token = jwt.sign(userDetails, process.env.JWT_SECRET, {
			expiresIn: expirationTimeInSeconds,
			issuer: process.env.JWT_ISSUER,
			audience: process.env.JWT_AUDIENCE,
			subject: process.env.JWT_SUBJECT,
		});

		res.cookie("token", token, {
			maxAge: 1000 * 60 * Number(process.env.JWT_EXPIRATION_MINUTES),
			httpOnly: true,
		});
		return Response(res, "success", "Signed in successfully", userDetails);
	} catch (error) {
		return Response(res, "error", error.message);
	}
};

module.exports = { userSignIn };

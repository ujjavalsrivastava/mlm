import { Link, useNavigate, useLocation } from "react-router-dom";
import backgroundImage from "../../assets/img/body-bg.jpg";
import React, { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [data, setData] = useState({
    otp: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // Access the email data from location.state
  const emaildata = location.state?.emaildata || {}; // Fallback to an empty object if no state is passed

  // Now you can use emaildata in this component
  console.log("Email data passed:", emaildata);

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const { otp, password, cpassword } = data;

      if (otp == "") {
        setError(true);
        toast.error("OTP is Required");
        return;
      }

      if (password == "") {
        setError(true);
        toast.error("Passsword is Required");
        return;
      }

      if (cpassword == "") {
        setError(true);
        toast.error("Confirm is Required");
        return;
      }

      if (password !== cpassword) {
        setError(true);
        toast.error("Password and Confirm Password not match");
        return;
      }

      const response = await axios.post("user/verify-reset-code", {
        email: emaildata.email,
        resetCode: data.otp,
        newPassword: data.password,
      });

      if (response.data.status == 200) {
        navigate("/login");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="main-content page-login ">
        <section className="section-page-login login-wrap tf-spacing-4">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-left">
                  <img
                    className=" ls-is-cached"
                    data-src=""
                    src="assets/images/page-title-home2-1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-right ">
                  <h2 className="login-title fw-7 ">Change Password</h2>
                  <div className="register">
                    <p className="fw-5 fs-15 ">Don’t have an account?</p>
                    <Link to={"/register"} className="fw-5 fs-15">
                      Join here
                    </Link>
                  </div>
                  <form onSubmit={submitLogin} className="form-login">
                    <div className="cols">
                      <fieldset className="tf-field field-username ">
                        <input
                          type="text"
                          onChange={handle}
                          name="otp"
                          placeholder="otp..."
                          className="tf-input style-1"
                        />

                        <label className="tf-field-label fs-15" for="field1">
                          OTP{" "}
                        </label>
                      </fieldset>
                    </div>

                    <div className="cols">
                      <fieldset className="tf-field field-username ">
                        <input
                          type="password"
                          onChange={handle}
                          name="password"
                          placeholder="password..."
                          className="tf-input style-1"
                        />

                        <label className="tf-field-label fs-15" for="field1">
                          New Password{" "}
                        </label>
                      </fieldset>
                    </div>

                    <div className="cols">
                      <fieldset className="tf-field field-username ">
                        <input
                          type="password"
                          onChange={handle}
                          name="cpassword"
                          placeholder="email..."
                          className="tf-input style-1"
                        />

                        <label className="tf-field-label fs-15" for="field1">
                          Confirm Password
                        </label>
                      </fieldset>
                    </div>

                    <button
                      className=" button-submit tf-btn w-100 "
                      type="submit"
                    >
                      Submit<i className="icon-arrow-top-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default ChangePassword;

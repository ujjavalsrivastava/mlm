import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import process from "./../../../public/dist/img/process.png";
import line from "./../../../public/dist/img/line.png";
import axios1 from "axios";
import { toast } from "react-toastify";
const register = () => {
  const [referral, setReferral] = useState(null);
  const [error, setError] = useState(false);
  const [storeToken, setStoreToken] = useState("");

  const [level, setlevel] = useState(1);
  const navigate = useNavigate();

  const [data, setData] = useState({
    referalCode: "",
    name: "",
    mobile: "",
    email: "",
    cemail: "",
    gender: "Male",
    state: "Andaman and Nicobar Islands",
    password: "",
    cpassword: "",
  });
  const [state, setState] = useState(null);
  console.log(data);
  const stateFun = async () => {
    try {
      const response = await axios1.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "India",
        }
      );
      setState(response.data.data.states);
    } catch (error) {
      console.log(error);
    }
  };

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const checklevel = (level) => {
    const { name, mobile, email, cemail, gender, state, password, cpassword } =
      data;
    if (
      name != "" &&
      mobile != "" &&
      email != "" &&
      cemail != "" &&
      gender != "" &&
      state != "" &&
      password != "" &&
      cpassword != ""
    ) {
      setlevel(level);
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const {
      referalCode,
      name,
      mobile,
      email,
      cemail,
      gender,
      state,
      password,
      cpassword,
    } = data;

    if (referalCode) {
      const refrealCode = await axios.get(
        `/user/check-refrealcode?referalCode=${referalCode}`
      );
      if (refrealCode?.data && refrealCode.data.inValid == false) {
        toast.error("refrealCode code is not valid");
        return;
      }
    }

    if (!name) {
      console.log(name);
      toast.error("Name is Required");
      return;
    }

    if (!mobile) {
      toast.error("Mobile is Required");
      return;
    }

    if (mobile.length !== 10) {
      toast.error("Invalid is Mobile");
      return;
    }

    if (!email) {
      toast.error("Email is Required");
      return;
    }

    if (!cemail) {
      toast.error("Confirm Email is Required");
      return;
    }
    const emailUser = await axios.get(`/user/valid?email=${email}`);
    if (emailUser?.data && emailUser.data.inValid) {
      toast.error("User with this email already exist please login");
      return;
    }

    if (email !== cemail) {
      toast.error("Email and Confirm Email not match");
      return;
    }

    if (!gender) {
      toast.error("Gender is Required");
      return;
    }

    if (!state) {
      toast.error("state is Required");
      return;
    }

    if (!password) {
      toast.error("password is Required");
      return;
    }
    if (!cpassword) {
      toast.error("Confirm password is Required");
      return;
    }
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

    if (!regex.test(password)) {
      toast.error(
        "Password must be atleast 8 characters long and it should contain both letters and numbers."
      );
      return;
    }

    if (password !== cpassword) {
      toast.error("Password and Confirm Password not match");
      return;
    }
    if (!error) {
      setlevel(level + 1);
    }
  };

  const handleEmail = async (e) => {
    const value = e.target.value;
    if (e.target.name === "mobile" && value.length !== 10) {
      setError(true);
      toast.error("Invalid mobile");
      return;
    }
    if (e.target.name === "email") {
      const emailUser = await axios.get(`/user/valid?email=${value}`);

      if (emailUser?.data && emailUser.data.inValid) {
        setError(true);
        toast.error("User with this email already exist please login");
        return;
      }
    }
    setError(false);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const orderCreate = async (price) => {
    try {
      const response = await axios.post("product/create/order", {
        amount: price * 100,
        currency: "INR",
        receipt: "xyz product purchased",
      });

      console.log({ response });

      const oId = response.data.order_id;

      handlePayment(price, oId);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    const response = await axios.post("user/register", data);
    setStoreToken(response.data.token);
    localStorage.setItem("token", response.data.token);
    await axios.get("user/store-reward");
  };

  const token = localStorage.getItem("token");
  const checklogin = () => {
    if (token) {
      navigate("/my-course");
    }
  };

  const handlePayment = (price, oId) => {
    const options = {
      key: import.meta.env.VITE_PAYMENT_KEY,
      amount: price * 100,
      currency: "INR",
      name: "Merchant Name",
      description: "Test Transaction",
      order_id: oId,
      handler: async function ({ razorpay_payment_id }) {
        try {
          await handleLogin();
        } catch (error) {
          console.log(error);
        }
        try {
          const productOrder = await axios.post("product/order", {
            amount: 2499,
            paymentId: razorpay_payment_id,
            orderId: oId,
            paymentMethod: "upi",
            status: "success",
            signature: "123sddfgdf",
          });
          toast.success(productOrder.data.message);
          navigate("/my-course");
        } catch (error) {
          if (token || storeToken) navigate("/my-course");
          console.log(error);
        }
      },
      prefill: {
        name: data?.name,
        email: data?.email,
        contact: data?.mobile,
      },
      notes: {
        address: data.state,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", (response) => {
      console.log("Payment failed:", response.error);
      toast.error("Payment failed:", response.error);
      // return;
      // Handle failed payment on the frontend
    });

    rzp1.open();
  };
  console.log(data);
  useEffect(() => {
    checklogin();
    const queryParams = new URLSearchParams(window.location.search);
    const value = queryParams.get("referralCode"); // 'myParam' is the name of the query parameter
    setReferral(value);
    if (value) {
      data.referalCode = value;
    }

    stateFun();
    const dropdownIds = ["selectgender", "selectstate"];

    dropdownIds.forEach((id) => {
      const selctelement = document.getElementById(id);
      if (selctelement) {
        selctelement.removeAttribute("style");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="main-content page-register">
        <section className="section-page-register login-wrap tf-spacing-4">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-left ">
                  <img
                    className=" ls-is-cached lazyloaded"
                    src="assets/images/login-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-right">
                  <div className="signup_head">
                    <div
                      className={
                        level == 1
                          ? "sign_head_card personal_head present_head"
                          : "sign_head_card personal_head present_head testimgblur"
                      }
                    >
                      <img
                        onClick={() => checklevel(1)}
                        src={process}
                        className="personal_image"
                        style={{ width: "40px" }}
                      />
                      <h6 className="">Personal info</h6>
                    </div>
                    <div className="sign_head_card">
                      <img
                        src={line}
                        className="head_line"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div
                      className={
                        level == 2
                          ? "sign_head_card course_head fade_head"
                          : "sign_head_card course_head fade_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        onClick={() => checklevel(2)}
                        className="course_image"
                        style={{ width: "40px" }}
                      />
                      <h6>Course Selection</h6>
                    </div>
                    <div className="sign_head_card">
                      <img
                        src={line}
                        className="head_line"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div
                      className={
                        level == 3
                          ? "sign_head_card payment_head fade_head"
                          : "sign_head_card payment_head fade_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        onClick={() => checklevel(3)}
                        className="payment_image"
                        style={{ width: "40px" }}
                      />
                      <h6>Payment info</h6>
                    </div>
                  </div>
                  <h2 className="login-title fw-7 ">Create A New Account</h2>
                  <div className="register">
                    <p className="fw-5 fs-15 ">Already have an account?</p>
                    <Link to={"/login"} className="fw-5 fs-15">
                      Sign In
                    </Link>
                  </div>
                  {level == 1 ? (
                    <>
                      <form
                        onSubmit={submitLogin}
                        className="form-login form-checkout"
                      >
                        <div className="cols">
                          <fieldset className="tf-field field-username">
                            <input
                              type="text"
                              className="tf-input style-1"
                              onChange={handle}
                              name="referalCode"
                              value={referral}
                              placeholder="Referral Code"
                            />
                            <label
                              className="tf-field-label fs-15"
                              for="field1"
                            >
                              Referral Code
                            </label>
                          </fieldset>
                        </div>
                        <div className="cols">
                          <fieldset className="tf-field field-email ">
                            <input
                              type="text"
                              className="tf-input style-1"
                              onChange={handle}
                              id="fast-name"
                              value={data.name}
                              name="name"
                              placeholder="Name..."
                              autocomplete="off"
                            />
                            <label
                              className="tf-field-label fs-15"
                              for="field2"
                            >
                              Name
                            </label>
                          </fieldset>
                          <fieldset className="tf-field field-pass ">
                            <input
                              type="number"
                              className="tf-input style-1"
                              onChange={handle}
                              onBlur={handleEmail}
                              id="last-name"
                              value={data.mobile}
                              name="mobile"
                              maxLength={10}
                              placeholder="Mobile..."
                              autocomplete="off"
                            />

                            <label
                              className="tf-field-label fs-15"
                              for="field3"
                            >
                              Mobile
                            </label>
                          </fieldset>
                        </div>
                        <div className="cols">
                          <fieldset className="tf-field field-pass-again ">
                            <input
                              type="email"
                              onChange={handle}
                              onBlur={handleEmail}
                              id="email"
                              value={data.email}
                              name="email"
                              placeholder="email..."
                              className="tf-input style-1"
                              autocomplete="off"
                            />

                            <label
                              className="tf-field-label fs-15"
                              for="field4"
                            >
                              Email
                            </label>
                          </fieldset>
                          <fieldset className="tf-field field-pass-again ">
                            <input
                              type="email"
                              onChange={handle}
                              onBlur={handleEmail}
                              id="email"
                              value={data.cemail}
                              name="cemail"
                              placeholder="email..."
                              className="tf-input style-1"
                              autocomplete="off"
                            />

                            <label
                              className="tf-field-label fs-15"
                              for="field4"
                            >
                              Confirm Email
                            </label>
                          </fieldset>
                        </div>
                        <div className="cols">
                          <fieldset className="tf-field field-pass-again ">
                            <div
                              id="selectgender"
                              className="tf-select mb-50 tf-select-label"
                            >
                              <select
                                className="default"
                                name="gender"
                                onChange={handle}
                                style={{ marginTop: "-5px" }}
                              >
                                <option
                                  selected={
                                    data.gender == "Male" ? true : false
                                  }
                                >
                                  Male
                                </option>
                                <option
                                  selected={
                                    data.gender == "Female" ? true : false
                                  }
                                >
                                  Female
                                </option>
                              </select>
                              <label className="select-label" for="">
                                Gender
                              </label>
                            </div>
                          </fieldset>
                          <fieldset className="tf-field field-pass-again ">
                            <div
                              id="selectstate"
                              className="tf-select mb-50 tf-select-label"
                            >
                              <select
                                className="default"
                                name="state"
                                onChange={handle}
                              >
                                {state &&
                                  state.map((row, idx) => (
                                    <option
                                      key={`key=${idx}`}
                                      selected={
                                        data.state == row.name ? true : false
                                      }
                                    >
                                      {row && row.name}
                                    </option>
                                  ))}
                              </select>
                              <label className="select-label" for="">
                                State
                              </label>
                            </div>
                          </fieldset>
                        </div>
                        {/* end cols */}
                        <div className="cols">
                          <fieldset className="tf-field field-pass-again ">
                            <input
                              className="tf-input style-1"
                              type="password"
                              id="password"
                              name="password"
                              onChange={handle}
                              value={data.password}
                              placeholder="password"
                              autocomplete="off"
                            />

                            <label
                              className="tf-field-label fs-15"
                              for="field4"
                            >
                              Password
                            </label>
                          </fieldset>
                          <fieldset className="tf-field field-pass-again ">
                            <input
                              className="tf-input style-1"
                              type="password"
                              id="confirm-password"
                              name="cpassword"
                              onChange={handle}
                              value={data.cpassword}
                              placeholder="Confirm Password"
                              autocomplete="off"
                            />

                            <label
                              className="tf-field-label fs-15"
                              for="field4"
                            >
                              Confirm Password
                            </label>
                          </fieldset>
                        </div>
                        <button
                          className=" button-submit tf-btn w-100 "
                          type="submit"
                        >
                          Proceed to Course Selection
                          <i className="icon-arrow-top-right"></i>
                        </button>
                      </form>
                    </>
                  ) : null}

                  <div className="">
                    {level == 2 ? (
                      <>
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-02.jpg"
                              src="assets/images/courses/courses-02.jpg"
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">
                              <a href="#"> Advance Digital Marketing</a>
                            </h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6  fw-5">₹2948.82</div>
                            </div>
                          </div>
                        </div>

                        <button
                          className=" button-submit tf-btn w-100 "
                          type="button"
                          onClick={() => setlevel(level + 1)}
                        >
                          Select Course Boundle
                          <i className="icon-arrow-top-right"></i>
                        </button>
                      </>
                    ) : null}

                    {level == 3 ? (
                      <>
                        <div>
                          <img
                            src="assets/images/raza.png"
                            alt="img"
                            className="injectable center"
                          />
                          <button
                            className=" button-submit tf-btn w-100 "
                            type="button"
                            onClick={() => orderCreate("2948")}
                          >
                            Make Payment for 2948
                            <i className="icon-arrow-top-right"></i>
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default register;

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
    const { name, mobile, email, cemail, gender, state, password, cpassword } =
      data;

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
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Test Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    checklogin();
    const queryParams = new URLSearchParams(window.location.search);
    const value = queryParams.get("referralCode"); // 'myParam' is the name of the query parameter
    setReferral(value);
    //setData(value);
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
      <div class="main-content page-register">
        <section class="section-page-register login-wrap tf-spacing-4">
          <div class="tf-container">
            <div class="row">
              <div class="col-lg-6">
                <div class="img-left ">
                  <img
                    class=" ls-is-cached lazyloaded"
                    src="assets/images/login-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="content-right">
                  <div class="signup_head">
                    <div
                      class={
                        level == 1
                          ? "sign_head_card personal_head present_head"
                          : "sign_head_card personal_head present_head testimgblur"
                      }
                    >
                      <img
                        onClick={() => checklevel(1)}
                        src={process}
                        class="personal_image"
                        style={{ width: "40px" }}
                      />
                      <h6 class="">Personal info</h6>
                    </div>
                    <div class="sign_head_card">
                      <img
                        src={line}
                        class="head_line"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div
                      class={
                        level == 2
                          ? "sign_head_card course_head fade_head"
                          : "sign_head_card course_head fade_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        onClick={() => checklevel(2)}
                        class="course_image"
                        style={{ width: "40px" }}
                      />
                      <h6>Course Selection</h6>
                    </div>
                    <div class="sign_head_card">
                      <img
                        src={line}
                        class="head_line"
                        style={{ width: "60px" }}
                      />
                    </div>
                    <div
                      class={
                        level == 3
                          ? "sign_head_card payment_head fade_head"
                          : "sign_head_card payment_head fade_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        onClick={() => checklevel(3)}
                        class="payment_image"
                        style={{ width: "40px" }}
                      />
                      <h6>Payment info</h6>
                    </div>
                  </div>
                  <h2 class="login-title fw-7 ">Create A New Account</h2>
                  <div class="register">
                    <p class="fw-5 fs-15 ">Already have an account?</p>
                    <Link to={"/login"} class="fw-5 fs-15">
                      Sign In
                    </Link>
                  </div>
                  {level == 1 ? (
                    <>
                      <form
                        onSubmit={submitLogin}
                        className="form-login form-checkout"
                      >
                        <div class="cols">
                          <fieldset class="tf-field field-username">
                            <input
                              type="text"
                              class="tf-input style-1"
                              onChange={handle}
                              name="referalCode"
                              value={referral}
                              placeholder="Referral Code"
                            />
                            <label class="tf-field-label fs-15" for="field1">
                              Referral Code
                            </label>
                          </fieldset>
                        </div>
                        <div class="cols">
                          <fieldset class="tf-field field-email ">
                            <input
                              type="text"
                              class="tf-input style-1"
                              onChange={handle}
                              id="fast-name"
                              value={data.name}
                              name="name"
                              placeholder="Name..."
                              autocomplete="off"
                            />
                            <label class="tf-field-label fs-15" for="field2">
                              Name
                            </label>
                          </fieldset>
                          <fieldset class="tf-field field-pass ">
                            <input
                              type="number"
                              class="tf-input style-1"
                              onChange={handle}
                              onBlur={handleEmail}
                              id="last-name"
                              value={data.mobile}
                              name="mobile"
                              maxLength={10}
                              placeholder="Mobile..."
                              autocomplete="off"
                            />

                            <label class="tf-field-label fs-15" for="field3">
                              Mobile
                            </label>
                          </fieldset>
                        </div>
                        <div class="cols">
                          <fieldset class="tf-field field-pass-again ">
                            <input
                              type="email"
                              onChange={handle}
                              onBlur={handleEmail}
                              id="email"
                              value={data.email}
                              name="email"
                              placeholder="email..."
                              class="tf-input style-1"
                              autocomplete="off"
                            />

                            <label class="tf-field-label fs-15" for="field4">
                              Email
                            </label>
                          </fieldset>
                          <fieldset class="tf-field field-pass-again ">
                            <input
                              type="email"
                              onChange={handle}
                              onBlur={handleEmail}
                              id="email"
                              value={data.cemail}
                              name="cemail"
                              placeholder="email..."
                              class="tf-input style-1"
                              autocomplete="off"
                            />

                            <label class="tf-field-label fs-15" for="field4">
                              Confirm Email
                            </label>
                          </fieldset>
                        </div>
                        <div class="cols">
                          <fieldset class="tf-field field-pass-again ">
                            <div
                              id="selectgender"
                              class="tf-select mb-50 tf-select-label"
                            >
                              <select
                                class="default"
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
                              <label class="select-label" for="">
                                Gender
                              </label>
                            </div>
                          </fieldset>
                          <fieldset class="tf-field field-pass-again ">
                            <div
                              id="selectstate"
                              class="tf-select mb-50 tf-select-label"
                            >
                              <select
                                class="default"
                                name="state"
                                onChange={handle}
                              >
                                {state &&
                                  state.map((row) => (
                                    <option
                                      selected={
                                        data.state == row.name ? true : false
                                      }
                                    >
                                      {row && row.name}
                                    </option>
                                  ))}
                              </select>
                              <label class="select-label" for="">
                                State
                              </label>
                            </div>
                          </fieldset>
                        </div>
                        {/* end cols */}
                        <div class="cols">
                          <fieldset class="tf-field field-pass-again ">
                            <input
                              class="tf-input style-1"
                              type="password"
                              id="password"
                              name="password"
                              onChange={handle}
                              value={data.password}
                              placeholder="password"
                              autocomplete="off"
                            />

                            <label class="tf-field-label fs-15" for="field4">
                              Password
                            </label>
                          </fieldset>
                          <fieldset class="tf-field field-pass-again ">
                            <input
                              class="tf-input style-1"
                              type="password"
                              id="confirm-password"
                              name="cpassword"
                              onChange={handle}
                              value={data.cpassword}
                              placeholder="Confirm Password"
                              autocomplete="off"
                            />

                            <label class="tf-field-label fs-15" for="field4">
                              Confirm Password
                            </label>
                          </fieldset>
                        </div>
                        <button
                          class=" button-submit tf-btn w-100 "
                          type="submit"
                        >
                          Proceed to Course Selection
                          <i class="icon-arrow-top-right"></i>
                        </button>
                      </form>
                    </>
                  ) : null}

                  <div class="">
                    {level == 2 ? (
                      <>
                        <div class="course-item hover-img style-2 h240">
                          <div class="features image-wrap">
                            <img
                              class="lazyload"
                              data-src="assets/images/courses/courses-02.jpg"
                              src="assets/images/courses/courses-02.jpg"
                            />
                          </div>
                          <div class="content">
                            <h5 class="fw-5 line-clamp-2">
                              <a href="#"> Advance Digital Marketing</a>
                            </h5>

                            <div class="author">
                              By:
                              <a href="#" class="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div class="bottom">
                              <div class="h6  fw-5">₹2948.82</div>
                            </div>
                          </div>
                        </div>

                        <button
                          class=" button-submit tf-btn w-100 "
                          type="button"
                          onClick={() => setlevel(level + 1)}
                        >
                          Select Course Boundle
                          <i class="icon-arrow-top-right"></i>
                        </button>
                      </>
                    ) : null}

                    {level == 3 ? (
                      <>
                        <div>
                          <img
                            src="assets/images/raza.png"
                            alt="img"
                            class="injectable center"
                          />
                          <button
                            class=" button-submit tf-btn w-100 "
                            type="button"
                            onClick={() => orderCreate("2948")}
                          >
                            Make Payment for 2948
                            <i class="icon-arrow-top-right"></i>
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

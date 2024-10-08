import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img/body-bg.jpg";
import React, { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const VerifyOTP = () => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const token = localStorage.getItem("token");

  const checklogin = () => {
    if (token) {
      navigate("/my-course");
    }
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("user/login", data);

      if (response.data.code == "801") {
        localStorage.setItem("token", response.data.token);
        navigate("/my-course");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    checklogin();
  }, []);

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
                  <h2 className="login-title fw-7 ">Verify OTP</h2>
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
                          type="email"
                          onChange={handle}
                          id="email"
                          name="otp"
                          placeholder="Inter OTP..."
                          className="tf-input style-1"
                        />

                        <label className="tf-field-label fs-15" for="field1">
                          Enter OTP
                        </label>
                      </fieldset>
                    </div>

                    <button
                      className=" button-submit tf-btn w-100 "
                      type="submit"
                    >
                      Verify OTP<i className="icon-arrow-top-right"></i>
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
export default VerifyOTP;

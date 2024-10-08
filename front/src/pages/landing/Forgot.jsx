import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img/body-bg.jpg";
import React, { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const Forgot = () => {
  const [data, setData] = useState({
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("user/forgot-password", data);

      setLoading(false);
      if (response.data.status == 200) {
        navigate("/update-password", { state: { emaildata: data } });

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
                  <h2 className="login-title fw-7 ">Forget Password</h2>
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
                          required
                          name="email"
                          placeholder="email..."
                          className="tf-input style-1"
                        />

                        <label className="tf-field-label fs-15" for="field1">
                          Username Or Email
                        </label>
                      </fieldset>
                    </div>

                    <button
                      className=" button-submit tf-btn w-100 "
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? "Proccesing..." : "Send OTP"}{" "}
                      <i className="icon-arrow-top-right"></i>
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
export default Forgot;

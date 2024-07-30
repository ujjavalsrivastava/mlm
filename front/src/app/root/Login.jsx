import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import loginPageStore from "/src/utils/store/Base/loginPageStore";
import { toast } from "react-toastify";
import { signInService } from "/src/services/base/authService";
import { getMenuItems } from "/src/services/base/commonService";
import stringifySafe from "json-stringify-safe";

import goerplogo_white from "/src/assets/images/goerplogo_white.png";
import "./Login.css";
import login_img from "/src/assets/images/login-img.svg";
import mawai_logo from "/src/assets/images/mawai-logo.jpg";

const LoginPage = () => {
  const { loginPageState, fetchData, setState } = loginPageStore();
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    unitCode: "",
    finYear: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDetails((prevLoginDetails) => ({
      ...prevLoginDetails,
      [e.target.name]: e.target.value,
    }));
    console.log("change");
  };
  // console.log(loginDetails);

  const getOptions = () => {
    fetchData({
      username: loginDetails.username,
    });
    console.log(loginPageState);
  };
  useEffect(() => {
    if (loginPageState.units) {
      setLoginDetails((prevLoginDetails) => ({
        ...prevLoginDetails,
        ["unitCode"]: loginPageState.units[0].code || "",
      }));
    }
  }, [loginPageState]);

  useEffect(() => {
    if (loginDetails.username === "") {
      setLoginDetails((prevLoginDetails) => ({
        ...prevLoginDetails,
        ["unitCode"]: "",
      }));
    }
  }, [loginDetails.username]);

  useEffect(() => {
    if (loginPageState.error) {
      toast.error(loginPageState.error);
      setState({ error: null });
    }
  }, [loginPageState.error, setState, loginDetails.username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginDetails);
    const response = await signInService(loginDetails);
    if (response.status === "success") {
      const menuResponse = await getMenuItems();
      console.log(menuResponse);
      if (menuResponse.status === "success") {
        localStorage.setItem("menuItems", stringifySafe(menuResponse.payload));

        toast.success(response.message);
        navigate("/dashboard");
      } else {
        toast.error(menuResponse.message);
        return;
      }
    } else if (response.status === "fail") {
      toast.error(response.message);
    }
  };

  return (
    <div className="loginBody">
       <div className="login_page">
            <section class="login_page">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div class="login-content">
                    <div class="bg-animate"></div>
                    <div class="left-content">
                        <a href="https://www.goerp.ai/" target="_blank" class="logo flex justify-center">
                            <img src={goerplogo_white} style={{ width: '190px' }} alt="Erp logo" />
                        </a>

                        <div class="bg_img">
                            <img src={login_img} width="410" class="back_image" alt="Login Image" />
                        </div>
                    </div>

                    <div class="right-content">
                        <div class="right-logo">
                            <a href="https://www.mawai.com/" target="_blank " className=' flex justify-center'><img src={mawai_logo} alt="" /></a>
                            <h4>MAWAI INFOTECH LTD. - STD</h4>
                        </div>
                        <div class="floating-label">
                            <input class="floating-input" type="text" name="username"
                                  onChange={(e) => handleChange(e)}
                                  value={loginDetails.username}
                                  onBlur={getOptions} />
                            <span class="highlight"></span>
                            <label className="loginLabel">User Name</label>
                        </div>

                        <div class="floating-label">
                            <select class="floating-select" onChange={(e) => handleChange(e)}
                                name="unitCode"
                                disabled={
                                  loginPageState.units
                                    ? false
                                    : true || loginDetails.username === ""
                                      ? true
                                      : false
                                }>
                                 {!loginPageState.units ? (
                                  <option hidden defaultValue value={null}>
                                    Select Unit
                                  </option>
                                ) : (
                                  loginPageState.units &&
                                  loginPageState.units.map((unit, index) => (
                                    <option
                                      value={unit.code}
                                      key={index}
                                      {...(index === 0
                                        ? { defaultValue: true }
                                        : {})}
                                    >
                                      {unit.name}
                                      {" - "}
                                      {unit.code}
                                    </option>
                                  ))
                                )}
                            </select>
                            <span class="highlight"></span>
                            <label className="loginLabel">Select Unit</label>
                        </div>

                        <div class="floating-label">
                            <select class="floating-select"  disabled={loginPageState.units ? false : true}
                                onChange={(e) => handleChange(e)}
                                name="finYear">
                                  <option hidden defaultValue value={null}>
                                  Financial Year
                                </option>
                                {loginPageState.finYear &&
                                  loginPageState.finYear.map((year) => (
                                    <option key={year.fin_year_code}>
                                      {year.fin_year_description}
                                    </option>
                                  ))}
                            </select>
                            <span class="highlight"></span>
                            <label className="loginLabel">Financial Year</label>
                        </div>

                        <div class="floating-label passward">
                            <input class="floating-input" type="password" id="passwordField"  disabled={
                                    loginPageState.loading ||
                                    !loginPageState.units ||
                                    !loginPageState.finYear
                                  }
                                  onChange={(e) => handleChange(e)}
                                  name="password"/>
                            <i id="toggleIcon" class=" ri-eye-off-fill"></i>
                            <span class="highlight"></span>
                            <label className="loginLabel">Password</label>
                        </div>

                        <div class="bottom_element">
                            <div class="remember">
                                <span>
                                    <input class="form-check-input" type="checkbox" name="flexRadioDefault"
                                        id="flexRadioDefault2" />
                                </span>
                                <span>Remember Me</span>
                            </div>
                            
                            <Link
                                  to="/auth-pass-reset-basic"
                                  className="farget"
                                >
                                  Forgot password?
                                </Link>
                        </div>

                        <div class="buttun-section">
                            <input type="submit" disabled={
                                  loginDetails.finYear === "" ||
                                  loginDetails.unitCode === ""
                                }
                                 class="btn-hover color-9 login-btn-9" name="sign-in" value="Sign In" />
                        </div>
                        <p class="copy_right">© 2024 <span>
                            <a href="https://www.mawai.com/" target="_blank" rel="nofollow">Mawai
                                Infotech Ltd.</a></span></p>
                    </div>
                </div>
                </form>
            </section>

            <div class='box'>
                <div class='wave -one'></div>
                <div class='wave -two'></div>
                <div class='wave -three'></div>
            </div>

            <div class='box2'>
                <div class='wave -one'></div>
                <div class='wave -two'></div>
                <div class='wave -three'></div>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;

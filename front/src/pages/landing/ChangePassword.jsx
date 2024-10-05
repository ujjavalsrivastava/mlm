import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img/body-bg.jpg";
import React, { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const token = localStorage.getItem("token");

  const checklogin =()=>{
    if(token){
      navigate('/my-course');
    }
  }

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


  useEffect(()=>{
    checklogin();
  },[])

    return (

        <React.Fragment>


<div class="main-content page-login ">
            <section class="section-page-login login-wrap tf-spacing-4">
                <div class="tf-container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="img-left">
                                <img class=" ls-is-cached" data-src=""
                                    src="assets/images/page-title-home2-1.jpg" alt="" />

                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="content-right ">
                                
                                <h2 class="login-title fw-7 ">
                                    Change Password
                                </h2>
                                <div class="register">
                                    <p class="fw-5 fs-15 " >Don’t have an account?</p>
                                    <Link to={'/register'} class="fw-5 fs-15" >
                                    Join here
                                    </Link>
                                </div>
                                <form onSubmit={submitLogin} class="form-login">
                                    <div class="cols">
                                        <fieldset class="tf-field field-username " >
                                        <input
                            type="password"
                            onChange={handle}
                            
                          
                            
                            name="password"
                            placeholder="password..."
                            class="tf-input style-1"
                          />
                                           
                                            <label class="tf-field-label fs-15" for="field1">New Password </label>
                                        </fieldset>
                                    </div>
                                   
                                    <div class="cols">
                                        <fieldset class="tf-field field-username " >
                                        <input
                            type="password"
                            onChange={handle}
                            
                          
                            required
                            name="cpassword"
                            placeholder="email..."
                            class="tf-input style-1"
                          />
                                           
                                            <label class="tf-field-label fs-15" for="field1">Confirm Password</label>
                                        </fieldset>
                                    </div>

                                    <button class=" button-submit tf-btn w-100 " 
                                        type="submit">
                                        Submit<i class="icon-arrow-top-right"></i>
                                    </button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
                
            </section>


        </div>


        </React.Fragment>

    )
}
export default ChangePassword;
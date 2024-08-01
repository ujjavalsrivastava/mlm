import { Link, useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/img/body-bg.jpg';
import { useState } from "react";
import { httpAxios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const LoginPage = () => {
  const[data,setData]=useState(null);

  const navigate =  useNavigate();

  const handle = (e)=>{
    setData((pre)=>({
      ...pre,
      [e.target.name]:e.target.value
    }))
  }

  const submitLogin = async(e)=>{
    e.preventDefault();
    try{
      const response =  await httpAxios.post('user/login',{data});

    if(response.data.code == '801'){
      localStorage.setItem('token', response.data.token);
      navigate("/dashboard");
      toast.success(response.data.message);
    }else{
      toast.error(response.data.error);
    }

    }catch(error){
      toast.error(error.message);
    }
    
      
  }
 

  return (
    <>
    <div style={{backgroundImage:`url(${backgroundImage})`,height:'100vh'}}>
    <div className="login-box" >
  <div className="login-box-body" >
    <h3 className="login-box-msg">Sign In</h3>
    
    <form onSubmit={submitLogin} method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control sty1" name="email" placeholder="User" onChange={handle} />
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control sty1" name="password"  onChange={handle} placeholder="Password" />
      </div>
      <div>
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" />
              Remember Me </label>
            <a href="pages-recover-password.html" className="pull-right"><i className="fa fa-lock"></i> Forgot pwd?</a> </div>
        </div>
       
        <div className="col-xs-4 m-t-1">
          <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
        </div>
     
      </div>
    </form>
    <div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
      Facebook</a> <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
      Google+</a> </div>
   
    
    <div className="m-t-2">Don't have an account? <a href="pages-register.html" className="text-center">Sign Up</a></div>
  </div>

</div>
</div>
</>
  );
};

export default LoginPage;

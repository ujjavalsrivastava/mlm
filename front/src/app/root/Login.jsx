import { Link, useNavigate } from "react-router-dom";
import backgroundImage from '../../assets/img/body-bg.jpg';

const LoginPage = () => {
 

  return (
    <>
    <div style={{backgroundImage:`url(${backgroundImage})`,height:'100vh'}}>
    <div className="login-box" >
  <div className="login-box-body" >
    <h3 className="login-box-msg">Sign In</h3>
    
    <form action="https://uxliner.com/niche/main/index.html" method="post">
      <div className="form-group has-feedback">
        <input type="email" className="form-control sty1" placeholder="User" />
      </div>
      <div className="form-group has-feedback">
        <input type="password" className="form-control sty1" placeholder="Password" />
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

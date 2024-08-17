import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/img/body-bg.jpg";
import { useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const Register = () => {
  const [data, setData] = useState(null);

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
      const response = await axios.post("user/register", data);
       console.log(response)
      if (response.status == "200") {
        
        navigate("/login");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "100vh",
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="login-box">
          <div className="login-box-body">
            <h3 className="login-box-msg">Sign In</h3>

            <form onSubmit={submitLogin} method="post">
            <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control sty1"
                  name="name"
                  placeholder="Name"
                  onChange={handle}
                />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="email"
                  className="form-control sty1"
                  name="email"
                  placeholder="Email"
                  onChange={handle}
                />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  className="form-control sty1"
                  name="password"
                  onChange={handle}
                  placeholder="Password"
                />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  className="form-control sty1"
                  name="referalCode"
                  placeholder="Referal Code"
                  onChange={handle}
                />
              </div>
              <div>
              
                <div className="col-xs-4 m-t-1">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          

            <div className="m-t-2">
              Don't have an account?{" "}
              <Link to={'/login'} className="text-center">
             
                Sign In
              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

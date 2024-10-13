import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const changePassword = () => {
  const [data, setdata] = useState(null);

  const handleChange = (e) => {
    setdata((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const savefun = async (e) => {
    e.preventDefault();
    try {
      if (data.newPassword != data.cpassword) {
        toast.error("New password and confim password not match");
        return false;
      }
      const response = await axios.put("user/change-password", data);
      console.log(response);
      if (response.data?.code == "802") {
        toast.error(response.data.error);
      } else {
        toast.success(response.data.message);
        setTimeout(() => {
          localStorage.clear();
          window.location.assign("/login");
        }, 3000);
    
        
        
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1 className="text-black">Change Password</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Change Password{" "}
              </a>
            </li>
            {/* <li className="sub-bread">
              <i className="fa fa-angle-right"></i> Change Password
            </li>
            <li>
              <i className="fa fa-angle-right"></i> Password
            </li> */}
          </ol>
        </div>

        <div className="content">
          <div className="row m-t-3">
            <div className="col-lg-12">
              <div className="card ">
                <div className="card-header bg-blue">
                  <h5 className="text-white m-b-0">Change Password</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={savefun}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group has-feedback">
                          <label className="control-label">Old Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="oldPassword"
                            onChange={handleChange}
                            required
                          />
                          {/* <span
                            className="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group has-feedback">
                          <label className="control-label">New Password</label>
                          <input
                            className="form-control"
                            type="password"
                            name="newPassword"
                            onChange={handleChange}
                            required
                          />
                          {/* <span
                            className="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Confirm password
                          </label>
                          <input
                            className="form-control"
                            type="password"
                            name="cpassword"
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12 p-3">
                        <button type="submit" className="btn btn-success">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default changePassword;

import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";


const changePassword = () => {

  const [data, setdata] = useState(null);

  const handleChange = (e)=>{
    setdata((pre)=>(
      {
        ...pre,
        [e.target.name]:e.target.value
      }
    ))
  } 

  const savefun = async(e)=>{
    e.preventDefault();
    try{
        if(data.newPassword != data.cpassword){
            toast.error('New password and confim password not match');
            return false;
        }
        const response =  await axios.post('user/change-password',data);
        console.log(response)
        if( response.data?.code == '802'){
            
            toast.error(response.data.error)
          }else{
            toast.success(response.data.message)
          }
            }catch(error){
             
              toast.error(error?.response?.data?.error);
            }

  }



  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">Change Password</h1>
          <ol class="breadcrumb">
            <li>
            <a href="#" style={{color:'black'}}>Home /  Change Password </a>
            </li>
            {/* <li class="sub-bread">
              <i class="fa fa-angle-right"></i> Change Password
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Password
            </li> */}
          </ol>
        </div>

       
        <div class="content">
         
          <div class="row m-t-3">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-header bg-blue">
                  <h5 class="text-white m-b-0">Change Password</h5>
                </div>
                <div class="card-body">
                  <form onSubmit={savefun}>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Old Password</label>
                          <input
                            class="form-control"
                          
                            type="password"
                            name="oldPassword"
                            onChange={handleChange}
                            required
                           
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">New Password</label>
                          <input
                            class="form-control"
                         
                            type="password"
                            name="newPassword"
                            onChange={handleChange}
                            required
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Confirm password</label>
                          <input
                            class="form-control"
                            type="password"
                            name="cpassword"
                            onChange={handleChange}
                            required
                            
                          />
                          
                        </div>
                      </div>
               
                      <div class="col-md-12 p-3">
                        <button type="submit" class="btn btn-success">
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

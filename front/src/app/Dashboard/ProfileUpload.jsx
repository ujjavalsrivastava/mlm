import { useState } from "react";
import { httpFileAxios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const ProfileUpload = ()=>{
  const[file,setFile] = useState(null);

  const handleFile = (e)=>{
    setFile(e.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
try{

  const formData = new FormData();
  formData.append('profilePicture', file);
  const response = await httpFileAxios.post('user/profile-picture',formData);
   toast.success(response.data.message);
}catch(error){
console.log(error);
}
   


  }
    return (
        <>

<div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">Profile</h1>
          <ol class="breadcrumb">
            <li>
            <a href="#" style={{color:'black'}}>Home /  Profile Upload </a>
            </li>
            {/* <li class="sub-bread">
              <i class="fa fa-angle-right"></i> Profile
            </li> */}
            {/* <li>
              <i class="fa fa-angle-right"></i> Profile
            </li> */}
          </ol>
        </div>

       
        <div class="content">
         
          <div class="row m-t-3">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-header bg-blue">
                  <h5 class="text-white m-b-0">User Profile</h5>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row">

                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="custom-file center-block block">
                            <input
                              id="file"
                              class="custom-file-input"
                              type="file"
                              onChange={handleFile}
                            />
                            
                          </label>
                        </div>
                      </div>
                      <br/><br/>
                      <div class="col-md-12">
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
    )
}
export default ProfileUpload;
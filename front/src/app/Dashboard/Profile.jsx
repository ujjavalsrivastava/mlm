import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import axios1 from "axios";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";
const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const[state,setState]= useState(null);
  const[Updateprofile,setUpdateprofile]= useState({});
 const stateFun  = async()=>{
  try{
    const response = await axios1.post('https://countriesnow.space/api/v0.1/countries/states',{
      "country": "India"
    });
    setState(response.data.data.states);
    setUpdateprofile(profile.data);
  }catch(error){
    console.log(error)
  }

 }

 const saveProfile = async(e)=>{
  e.preventDefault();
  try{
   const response =  await axios.post('user/profile',Updateprofile);
   console.log(response)
   if(response){
     toast.success(response.data.message)
   }else{
    toast.error(response.data.message)
   }
  }catch(error){
    console.log(error)
  }
 }

 console.log('profile ' + JSON.stringify(profile) )

  const handle =(e)=>{
    setUpdateprofile((pre)=>({
      ...pre,
      [e.target.name]:e.target.value
    }))
  }


  useEffect(() => {
    stateFun();
    if (profile?.status !== "succeeded") {
      dispatch(fetchProfile());
    }
   
  }, []);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">Profile</h1>
          <ol class="breadcrumb">
            <li>
            <a href="#" style={{color:'black'}}>Home /  Profile </a>
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
                  <h5 class="text-white m-b-0">Sponsor Information</h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Sponsor Name</label>
                          <input
                            class="form-control"
                           
                            type="text"
                            
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Sponsor Mobile No.</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      
                    </div>
                  </form>
                </div>
              </div>
              </div>
              <hr/>
              <div class="col-lg-12">
              <div class="card ">
                <div class="card-header" style={{background:'rgb(88 103 221 / 72%)'}}>
                  <h5 class="text-white m-b-0">Personal Information</h5>
                  <p style={{color:'white'}}>Kindly complete your KYC, to change the name. </p>
                </div>
                <div class="card-body">
                  <form onSubmit={saveProfile}>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Name</label>
                          <input
                            class="form-control"
                            name="name"
                            type="text"
                            value={profile && profile.data.name}
                            onChange={handle}
                            
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Login Id</label>
                          <input
                            class="form-control"
                            value={profile && profile.data.email}
                            type="text"
                            readOnly
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Email Id</label>
                          <input
                            class="form-control"
                            value={profile && profile.data.email}
                            type="text"
                            name="email"
                            onChange={handle}
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Mobile No</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Gender</label>
                          <select class="form-control"  name="gender"
                            onChange={handle}>
                           <option selected={(profile.data.gender == 'Male') ?true:false}>Male</option>
                           <option selected={(profile.data.gender == 'Female') ?true:false}>Female</option>
                            </select>
                          
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Date of Birth</label>
                          <input
                            class="form-control"
                            value={profile && profile.data.dob}
                            type="text"
                            name="dob"
                            onChange={handle}
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Country</label>
                          <select class="form-control" name="country"
                            onChange={handle}>
                           <option>{profile && profile.data.country?profile.data.country:'India' }</option>
                            </select>
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">State</label>
                          <select class="form-control" name="state"
                            onChange={handle}>
                          <option>Select Option</option>
                            {state && state.map(row =>(
                              <option selected={(row.name == profile.data.state)?true:false}>{row && row.name}</option>
                            ))}
                           
                            </select>
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">City</label>
                          <input
                            class="form-control"
                            value= {profile && profile.data.city}
                            type="text"
                            name="city"
                            onChange={handle}
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>


                      <div class="col-md-6" style={{marginTop:'20px'}}>
                     
                      

                        <div class="form-group has-feedback">
                          <label class="control-label">Pin Code</label>
                          <input
                            class="form-control"
                           value= {profile && profile.data.pincode}
                            type="text"
                            name="pincode"
                            onChange={handle}
                          />
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Occupation</label>
                          <select class="form-control" name="occupation"
                            onChange={handle} >
		<option value="" >Select Occupation</option>
		<option value="1" selected={(profile.data.occupation == '1')?true:false}>Students</option>
		<option value="2" selected={(profile.data.occupation == '2')?true:false}>Working professionals</option>
		<option value="3" selected={(profile.data.occupation == '3')?true:false}>Entrepreneurs</option>
		<option value="4" selected={(profile.data.occupation == '4')?true:false}>Artists</option>
		<option value="5" selected={(profile.data.occupation == '5')?true:false}>Healthcare workers</option>
		<option value="6" selected={(profile.data.occupation == '6')?true:false}>Educators</option>
		<option value="7" selected={(profile.data.occupation == '7')?true:false}>Service industry workers</option>
		<option value="8" selected={(profile.data.occupation == '8')?true:false}>Engineers</option>
		<option value="9" selected={(profile.data.occupation == '9')?true:false}>Lawyers</option>
		<option value="10" selected={(profile.data.occupation == '10')?true:false}>Accountants</option>
		<option value="11" selected={(profile.data.occupation == '11')?true:false}>Sales professionals</option>
		<option value="12" selected={(profile.data.occupation == '12')?true:false}>Scientists</option>
		<option value="13" selected={(profile.data.occupation == '13')?true:false}>Social workers</option>
		<option value="14" selected={(profile.data.occupation == '14')?true:false}>Tradespeople (e.g. plumbers, electricians)</option>
		<option value="15" selected={(profile.data.occupation == '15')?true:false}>Military personnel</option>
		<option value="16" selected={(profile.data.occupation == '16')?true:false}>Public servants (e.g. government employees)</option>
		<option value="17" selected={(profile.data.occupation == '17')?true:false}>Freelancers</option>
		<option value="18" selected={(profile.data.occupation == '18')?true:false}>Information technology professionals</option>
		<option value="19" selected={(profile.data.occupation == '19')?true:false}>Writers and journalists</option>
		<option value="20" selected={(profile.data.occupation == '20')?true:false}>Musicians and performers</option>

	</select>
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>



                      <div class="col-md-6" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Language</label>
                          <select class="form-control" name="occupation"
                            onChange={handle} >
                           <option>English</option>
                            </select>
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-12" style={{marginTop:'20px'}}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Addresh</label>
                          <textarea class="form-control" name="address"
                            onChange={handle} value={profile && profile.data.address}></textarea>
                          {/* <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-12 p-3"><button type="submit" class="btn btn-success">Submit</button></div>

                      <div class="col-md-12 p-3">&nbsp;</div>
                     
                      
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

export default Profile;

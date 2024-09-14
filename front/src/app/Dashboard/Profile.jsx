import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [data, setdata] = useState(null);

  useEffect(() => {
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
              <a href="#">Home</a>
            </li>
            <li class="sub-bread">
              <i class="fa fa-angle-right"></i> Profile
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Profile
            </li>
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
                            value={data && data.name}
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Sponsor Mobile No.</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
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
                <div class="card-header bg-info">
                  <h5 class="text-white m-b-0">Personal Information</h5>
                  <p>Kindly complete your KYC, to change the name. </p>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Name</label>
                          <input
                            class="form-control"
                           
                            type="text"
                            value={data && data.name}
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Login Id</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Email Id</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Mobile No</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Gender</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Date of Birth</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Country</label>
                          <select class="form-control">
                           <option>India</option>
                            </select>
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">State</label>
                          <select class="form-control">
                           <option>Uttar Predesh</option>
                            </select>
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">City</label>
                          <select class="form-control">
                           <option>Varansi</option>
                            </select>
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Pin Code</label>
                          <input
                            class="form-control"
                           
                            type="text"
                          />
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Occupation</label>
                          <select class="form-control">
                           <option>Shop</option>
                            </select>
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>



                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Language</label>
                          <select class="form-control">
                           <option>English</option>
                            </select>
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">Addresh</label>
                          <textarea class="form-control"></textarea>
                          <span
                            class="fa fa-user form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
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

export default Profile;

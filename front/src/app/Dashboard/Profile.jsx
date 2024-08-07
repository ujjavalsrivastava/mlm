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
          {/* <div class="row">
        <div class="col-lg-12">
          <div class="card card-outline">
            <div class="card-header bg-blue">
              <h5 class="text-white m-b-0">Profile Example</h5>
            </div>
            <div class="card-body">
              <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" value={data && data.email} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              
              <div class="checkbox">
                <label>
                  <input type="checkbox" />
                  Check me out </label>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div> */}
          <div class="row m-t-3">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-header bg-blue">
                  <h5 class="text-white m-b-0">User Profile</h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">First Name</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
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
                          <label class="control-label">Last Name</label>
                          <input
                            class="form-control"
                            placeholder="Last Name"
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
                          <label class="control-label">E-mail</label>
                          <input
                            class="form-control"
                            placeholder="E-mail"
                            type="text"
                            value={data && data.email}
                          />
                          <span
                            class="fa fa-envelope-o form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Contact Number</label>
                          <input
                            class="form-control"
                            placeholder="Contact Number"
                            type="text"
                          />
                          <span
                            class="fa fa-phone form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Company</label>
                          <input
                            class="form-control"
                            placeholder="Company"
                            type="text"
                          />
                          <span
                            class="fa fa-briefcase form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback">
                          <label class="control-label">Website</label>
                          <input
                            class="form-control"
                            placeholder="https://"
                            type="text"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">Bio</label>
                          <textarea
                            class="form-control"
                            id="placeTextarea"
                            rows="3"
                            placeholder="Bio"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="custom-file center-block block">
                            <input
                              id="file"
                              class="custom-file-input"
                              type="file"
                            />
                            <span class="custom-file-control"></span>{" "}
                          </label>
                        </div>
                      </div>
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
          {/* <div class="row m-t-3">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4>Sample Form with the Icons</h4>
              <p>made with bootstrap elements</p>
              <form class="form ">
                <div class="form-group">
                  <label for="exampleInputuname">User Name</label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="ti-user"></i></div>
                    <input class="form-control" id="exampleInputuname" placeholder="Username" type="text" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="ti-email"></i></div>
                    <input class="form-control" id="exampleInputEmail1" placeholder="Enter email" type="email" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="pwd1">Password</label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                    <input class="form-control" id="pwd1" placeholder="Enter email" type="password" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="pwd2">Confirm Password</label>
                  <div class="input-group">
                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                    <input class="form-control" id="pwd2" placeholder="Enter email" type="password"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="checkbox checkbox-success">
                    <input id="checkbox1" type="checkbox"/>
                    <label for="checkbox1"> Remember me </label>
                  </div>
                </div>
                <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                <button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Sample Form with the right Icons</h4>
              <hp>
              made with bootstrap elements
              <p></p>
              <form class="form ">
                <div class="form-group">
                  <label for="exampleInputuname2">User Name</label>
                  <div class="input-group">
                    <input class="form-control" id="exampleInputuname2" placeholder="Username" type="text"/>
                    <div class="input-group-addon"><i class="ti-user"></i></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail2">Email address</label>
                  <div class="input-group">
                    <input class="form-control" id="exampleInputEmail2" placeholder="Enter email" type="email"/>
                    <div class="input-group-addon"><i class="ti-email"></i></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputpwd2">Password</label>
                  <div class="input-group">
                    <input class="form-control" id="exampleInputpwd2" placeholder="Enter pwd" type="password"/>
                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputpwd3">Confirm Password</label>
                  <div class="input-group">
                    <input class="form-control" id="exampleInputpwd3" placeholder="Enter pwd" type="password"/>
                    <div class="input-group-addon"><i class="ti-lock"></i></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="checkbox checkbox-success">
                    <input id="checkbox2" type="checkbox"/>
                    <label for="checkbox2"> Remember me </label>
                  </div>
                </div>
                <div class="text-left">
                  <button type="submit" class="btn btn-success waves-effect waves-light m-r-10">Submit</button>
                  <button type="submit" class="btn btn-inverse waves-effect waves-light">Cancel</button>
                </div>
              </form>
            </hp></div>
          </div>
        </div>
        <div class="col-lg-6 m-t-3">
          <div class="card">
            <div class="card-body">
              <h4>Sample Horizontal Form with Icons</h4>
              <p>Use Bootstrap's predefined grid classes for horizontal form</p>
              <form class="form-horizontal ">
                <div class="form-group row">
                  <label for="exampleInputuname3" class="col-sm-3 control-label">Username*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="ti-user"></i></div>
                      <input class="form-control" id="exampleInputuname3" placeholder="Username" type="text"/>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="exampleInputEmail3" class="col-sm-3 control-label">Email*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="ti-email"></i></div>
                      <input class="form-control" id="exampleInputEmail3" placeholder="Enter email" type="email"/>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="web" class="col-sm-3 control-label">Website</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="ti-world"></i></div>
                      <input class="form-control" id="web" placeholder="Enter Website Name" type="text"/>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword4" class="col-sm-3 control-label">Password*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="ti-lock"></i></div>
                      <input class="form-control" id="exampleInputpwd4" placeholder="Enter pwd" type="password"/>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword5" class="col-sm-3 control-label">Re Password*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <div class="input-group-addon"><i class="ti-lock"></i></div>
                      <input class="form-control" id="exampleInputpwd5" placeholder="Re Enter pwd" type="password"/>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="offset-sm-3 col-sm-9">
                    <div class="checkbox checkbox-success">
                      <input id="checkbox33" type="checkbox"/>
                      <label for="checkbox33">Check me out !</label>
                    </div>
                  </div>
                </div>
                <div class="form-group row m-b-0">
                  <div class="offset-sm-3 col-sm-9">
                    <button type="submit" class="btn btn-success waves-effect waves-light">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-6 m-t-3">
          <div class="card">
            <div class="card-body">
              <h4>Form with right Icon</h4>
              <p>Use Bootstrap's predefined grid classes for horizontal form</p>
              <form class="form-horizontal ">
                <div class="form-group row">
                  <label for="uname" class="col-sm-3 control-label">Username*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input class="form-control" id="uname" placeholder="Username" type="text"/>
                      <div class="input-group-addon"><i class="ti-user"></i></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="email2" class="col-sm-3 control-label">Email*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input class="form-control" id="exampleInputEmail1" placeholder="Enter email" type="email"/>
                      <div class="input-group-addon"><i class="ti-email"></i></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="web1" class="col-sm-3 control-label">Website</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input class="form-control" id="web1" placeholder="Enter Website Name" type="text"/>
                      <div class="input-group-addon"><i class="ti-world"></i></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="pass3" class="col-sm-3 control-label">Password*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input class="form-control" id="pass3" placeholder="Enter pwd" type="password"/>
                      <div class="input-group-addon"><i class="ti-lock"></i></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="pass4" class="col-sm-3 control-label">Re Password*</label>
                  <div class="col-sm-9">
                    <div class="input-group">
                      <input class="form-control" id="pass4" placeholder="Re Enter pwd" type="password"/>
                      <div class="input-group-addon"><i class="ti-lock"></i></div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="offset-sm-3 col-sm-9">
                    <div class="checkbox checkbox-success">
                      <input id="checkbox35" type="checkbox"/>
                      <label for="checkbox35">Check me out !</label>
                    </div>
                  </div>
                </div>
                <div class="form-group row m-b-0">
                  <div class="offset-sm-3 col-sm-9 ">
                    <button type="submit" class="btn btn-success waves-effect waves-light">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row m-t-3">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header bg-blue">
              <h5 class="m-b-0">Horizontal Form</h5>
            </div>
            <div class="card-body">
              <form action="#" class="form-horizontal form-bordered">
                <div class="form-body">
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">First Name</label>
                    <div class="col-md-9">
                      <input placeholder="First Name" class="form-control" type="text"/>
                      </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">Last Name</label>
                    <div class="col-md-9">
                      <input placeholder="Last Name" class="form-control" type="text"/>
                      </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">Gender</label>
                    <div class="col-md-9">
                      <select class="form-control custom-select">
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">Date of Birth</label>
                    <div class="col-md-9">
                      <input class="form-control" placeholder="dd/mm/yyyy" type="date"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">Street</label>
                    <div class="col-md-9">
                      <input class="form-control" type="text"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">City</label>
                    <div class="col-md-9">
                      <input class="form-control" type="text"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">State</label>
                    <div class="col-md-9">
                      <input class="form-control" type="text"/>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="control-label text-right col-md-3">Post Code</label>
                    <div class="col-md-9">
                      <input class="form-control" type="text"/>
                    </div>
                  </div>
                  <div class="form-group row last">
                    <label class="control-label text-right col-md-3">Country</label>
                    <div class="col-md-9">
                      <select class="form-control">
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-actions">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="offset-sm-3 col-md-9">
                          <button type="submit" class="btn btn-success"> Submit</button>
                          <button type="button" class="btn btn-inverse">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;

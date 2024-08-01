import { useEffect, useState } from "react";
import { httpAxios } from "../../helper/httpHelper";


const Profile = ()=>{

  const[data,setdata]=useState(null)

  const fetchProfile = async()=>{
    const response = await httpAxios.get('user/profile');
    setdata(response.data)
  }

useEffect(()=>{
  fetchProfile();
},[])
return (
<>
  <div class="content-wrapper"> 
   
    <div class="content-header sty-one">
      <h1 class="text-black">Profile</h1>
      <ol class="breadcrumb">
        <li><a href="#">Home</a></li>
        <li class="sub-bread"><i class="fa fa-angle-right"></i> Profile</li>
        <li><i class="fa fa-angle-right"></i> Profile</li>
      </ol>
    </div>
    
  
    {/* <div class="content">
      <div class="info-box">
        <h4 class="text-black m-b-3">Step wizard</h4>
        <div id="demo">
          <div class="step-app">
            <ul class="step-steps">
              <li><a href="#step1"><span class="number">1</span> Personal Info</a></li>
              <li><a href="#step2"><span class="number">2</span> Job Status</a></li>
              <li><a href="#step3"><span class="number">3</span> Interview</a></li>
              <li><a href="#step4"><span class="number">4</span> Remark</a></li>
            </ul>
            <div class="step-content">
              <div class="step-tab-panel" id="step1">
                <form>
                  <div class="row m-t-2">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstName1">First Name:</label>
                        <input class="form-control" type="text"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastName1">Last Name:</label>
                        <input class="form-control" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstName1">Email Address:</label>
                        <input class="form-control" type="text"/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastName1">Phone Number:</label>
                        <input class="form-control" type="text"/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="location1">Select City :</label>
                        <select class="custom-select form-control" id="location1" name="location">
                          <option value="">Select City</option>
                          <option value="Amsterdam">India</option>
                          <option value="Berlin">USA</option>
                          <option value="Frankfurt">Dubai</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="date1">Date of Birth :</label>
                        <input class="form-control" id="date1" type="date"/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="step-tab-panel" id="step2">
                <div class="row m-t-2">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="jobTitle1">Job Title :</label>
                      <input class="form-control" id="jobTitle1" type="text"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="videoUrl1">Company Name :</label>
                      <input class="form-control" id="videoUrl1" type="text"/>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="shortDescription1">Job Description :</label>
                      <textarea name="shortDescription" id="shortDescription1" rows="6" class="form-control"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="step-tab-panel" id="step3">
                <div class="row m-t-2">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="int1">Interview For :</label>
                      <input class="form-control" id="int1" type="text"/>
                    </div>
                    <div class="form-group">
                      <label for="intType1">Interview Type :</label>
                      <select class="custom-select form-control" id="intType1" data-placeholder="Type to search cities" name="intType1">
                        <option value="Banquet">Normal</option>
                        <option value="Fund Raiser">Difficult</option>
                        <option value="Dinner Party">Hard</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="Location1">Location :</label>
                      <select class="custom-select form-control" id="Location1" name="location">
                        <option value="">Select City</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Dubai">Dubai</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="jobTitle2">Interview Date :</label>
                      <input class="form-control" id="jobTitle2" type="date"/>
                    </div>
                    <div class="form-group">
                      <label>Requirements :</label>
                      <div class="c-inputs-stacked">
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">Employee</span> </label>
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">Contract</span> </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="step-tab-panel" id="step4">
                <div class="row m-t-2">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="behName1">Behaviour :</label>
                      <input class="form-control" id="behName1" type="text"/>
                    </div>
                    <div class="form-group">
                      <label for="participants1">Confidance</label>
                      <input class="form-control" id="participants1" type="text"/>
                    </div>
                    <div class="form-group">
                      <label for="participants1">Result</label>
                      <select class="custom-select form-control" id="participants1" name="location">
                        <option value="">Select Result</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Call Second-time">Call Second-time</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="decisions1">Comments</label>
                      <textarea name="decisions" id="decisions1" rows="4" class="form-control"></textarea>
                    </div>
                    <div class="form-group">
                      <label>Rate Interviwer :</label>
                      <div class="c-inputs-stacked">
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">1 star</span> </label>
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">2 star</span> </label>
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">3 star</span> </label>
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">4 star</span> </label>
                        <label class="inline custom-control custom-checkbox block">
                          <input class="custom-control-input" type="checkbox"/>
                          <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">5 star</span> </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="step-footer">
              <button data-direction="prev" class="btn btn-light">Previous</button>
              <button data-direction="next" class="btn btn-primary">Next</button>
              <button data-direction="finish" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
        <hr class="m-t-5 m-b-5"/>
        <h4 class="text-black m-b-3">Step Wizard with Validation</h4>
        <div id="demo1">
          <div class="step-app">
            <ul class="step-steps">
              <li><a href="#tab1"><span class="number">1</span> Personal Info</a></li>
              <li><a href="#tab2"><span class="number">2</span> Job Status</a></li>
              <li><a href="#tab3"><span class="number">3</span> Interview</a></li>
              <li><a href="#tab4"><span class="number">4</span> Remark</a></li>
            </ul>
            <div class="step-content">
              <div class="step-tab-panel" id="tab1">
                <form name="frmRes" id="frmRes">
                  <div class="row m-t-2">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstName1">First Name:</label>
                        <input class="form-control" type="text" name="firstname" required/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastName1">Last Name:</label>
                        <input class="form-control" type="text" name="lastname" required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstName1">Email Address:</label>
                        <input class="form-control" type="text" name="email" required/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastName1">Phone Number:</label>
                        <input class="form-control" type="text" name="phoneno" required/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="location1">Select City :</label>
                        <select class="custom-select form-control" id="location1" name="location">
                          <option value="">Select City</option>
                          <option value="Amsterdam">India</option>
                          <option value="Berlin">USA</option>
                          <option value="Frankfurt">Dubai</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="date1">Date of Birth :</label>
                        <input class="form-control" id="date1" type="date"/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="step-tab-panel" id="tab2">
                <h3>Tab2</h3>
                <form name="frmInfo" id="frmInfo">
                  <div class="row m-t-2">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="jobTitle1">Job Title :</label>
                        <input class="form-control" name="jobtitle1" type="text" required/>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="videoUrl1">Company Name :</label>
                        <input class="form-control" name="videoUrl1" type="text" required/>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="shortDescription1">Job Description :</label>
                        <textarea name="shortDescription" id="shortDescription1" rows="6" class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="step-tab-panel" id="tab3">
                <h3>Tab3</h3>
                <form name="frmLogin" id="frmLogin">
                  <div class="row m-t-2">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="int1">Interview For :</label>
                        <input class="form-control" name="int1" type="text" required/>
                      </div>
                      <div class="form-group">
                        <label for="intType1">Interview Type :</label>
                        <select class="custom-select form-control" data-placeholder="Type to search cities" name="intType1" required>
                          <option value="Banquet">Normal</option>
                          <option value="Fund Raiser">Difficult</option>
                          <option value="Dinner Party">Hard</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="Location1">Location :</label>
                        <select class="custom-select form-control" id="Location1" name="location">
                          <option value="">Select City</option>
                          <option value="India">India</option>
                          <option value="USA">USA</option>
                          <option value="Dubai">Dubai</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="jobTitle2">Interview Date :</label>
                        <input class="form-control" name="jobTitle2" type="date" required/>
                      </div>
                      <div class="form-group">
                        <label>Requirements :</label>
                        <div class="c-inputs-stacked">
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">Employee</span> </label>
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">Contract</span> </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="step-tab-panel" id="tab4">
                <h3>Tab4</h3>
                <form name="frmMobile" id="frmMobile">
                  <div class="row m-t-2">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="behName1">Behaviour :</label>
                        <input class="form-control" name="behName1" type="text" required/>
                      </div>
                      <div class="form-group">
                        <label for="participants1">Confidance</label>
                        <input class="form-control" name="participants1" type="text" required/>
                      </div>
                      <div class="form-group">
                        <label for="participants1">Result</label>
                        <select class="custom-select form-control" id="participants1" name="location">
                          <option value="">Select Result</option>
                          <option value="Selected">Selected</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Call Second-time">Call Second-time</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="decisions1">Comments</label>
                        <textarea name="decisions" id="decisions1" rows="4" class="form-control"></textarea>
                      </div>
                      <div class="form-group">
                        <label>Rate Interviwer :</label>
                        <div class="c-inputs-stacked">
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">1 star</span> </label>
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">2 star</span> </label>
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">3 star</span> </label>
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">4 star</span> </label>
                          <label class="inline custom-control custom-checkbox block">
                            <input class="custom-control-input" type="checkbox"/>
                            <span class="custom-control-indicator"></span> <span class="custom-control-description ml-0">5 star</span> </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="step-footer">
              <button data-direction="prev" class="btn btn-light">Previous</button>
              <button data-direction="next" class="btn btn-primary">Next</button>
              <button data-direction="finish" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
     
    </div> */}

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
                    <input class="form-control" placeholder="First Name" type="text" value={data && data.name} />
                    <span class="fa fa-user form-control-feedback" aria-hidden="true"></span> </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Last Name</label>
                    <input class="form-control" placeholder="Last Name" type="text"  />
                    <span class="fa fa-user form-control-feedback" aria-hidden="true"></span> </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">E-mail</label>
                    <input class="form-control" placeholder="E-mail" type="text" value={data && data.email}/>
                    <span class="fa fa-envelope-o form-control-feedback" aria-hidden="true"></span> </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Contact Number</label>
                    <input class="form-control" placeholder="Contact Number" type="text" />
                    <span class="fa fa-phone form-control-feedback" aria-hidden="true"></span> </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Company</label>
                    <input class="form-control" placeholder="Company" type="text" />
                    <span class="fa fa-briefcase form-control-feedback" aria-hidden="true"></span> </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group has-feedback">
                    <label class="control-label">Website</label>
                    <input class="form-control" placeholder="https://" type="text" />
                    <span class="fa fa-globe form-control-feedback" aria-hidden="true"></span> </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group has-feedback">
                    <label class="control-label">Bio</label>
                    <textarea class="form-control" id="placeTextarea" rows="3" placeholder="Bio"></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group has-feedback">
                    <label class="custom-file center-block block">
                      <input id="file" class="custom-file-input" type="file" />
                      <span class="custom-file-control"></span> </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-success">Submit</button>
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

}

export default Profile;
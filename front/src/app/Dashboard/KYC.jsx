import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";

const KYC = () => {
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
          <h1 class="text-black">KYC</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li class="sub-bread">
              <i class="fa fa-angle-right"></i> KYC
            </li>
            <li>
              <i class="fa fa-angle-right"></i> KYC Details
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
                  <h5 class="text-white m-b-0">User KYC</h5>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-4">
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
                     
                      <div class="col-md-4">
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
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Mobile Number</label>
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
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Document Type</label>
                          <input
                            class="form-control"
                            placeholder="Document"
                            type="text"
                            name="documentType"
                          />
                          <span
                            class="fa fa-briefcase form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Addhar Card</label>
                          <input
                            class="form-control"
                            placeholder="Addhar Card"
                            type="text"
                            name="addharCard"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Addhar Name</label>
                          <input
                            class="form-control"
                            placeholder="Addhar Card"
                            type="text"
                            name="addharName"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Pan Name</label>
                          <input
                            class="form-control"
                            placeholder="Pan Card"
                            type="text"
                            name="panName"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Pan Number</label>
                          <input
                            class="form-control"
                            placeholder="Pan Card"
                            type="text"
                            name="panNumber"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Bank Name</label>
                          <input
                            class="form-control"
                            placeholder="Bank Name"
                            type="text"
                            name="bankName"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Account Holder Name</label>
                          <input
                            class="form-control"
                            placeholder="Account Holder Name"
                            type="text"
                            name="acoountName"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Account Number</label>
                          <input
                            class="form-control"
                            placeholder="Account Card"
                            type="text"
                            name="accountNumber"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">IFSC code</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="text"
                            name="ifscCode"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                    
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="control-label">Bank Detatils</label>
                          
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Bank Name</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="text"
                            name="ifscCode"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Account Holder Name</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="text"
                            name="AccName"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Account Number</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="text"
                            name="accNo"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">IFSC Code</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="text"
                            name="ifscCode"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Upload Cancel Cheque / Passbook / Bank</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="file"
                            name="file"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                     
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">OTP Code</label>
                          <input
                            class="form-control"
                            placeholder="ifsc Code"
                            type="text"
                            name="otp"
                          />
                          <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "}
                        </div>
                      </div>
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-success">
                          Update Details
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

export default KYC;

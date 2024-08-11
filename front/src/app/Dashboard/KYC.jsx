import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const KYC = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const [kycSave, SetkycSave] = useState(null);
  const [data, setdata] = useState(null);

  const handleChange = (e)=>{
    SetkycSave((pre)=>(
      {
        ...pre,
        [e.target.name]:e.target.value
      }
    ))
  }
const saveKycData = async(e)=>{
  try{
    e.preventDefault();
  const response = await axios.post('kyc-update',kycSave);
  if(response.data.code == '801'){
    toast.success(response.data.message)
  }else{
    toast.error(response.data.message)
  }
    }catch(error){
      toast.error(error.message);
    }
}
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
         
          <div class="row m-t-3">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-header bg-blue">
                  <h5 class="text-white m-b-0">User KYC</h5>
                </div>
                <div class="card-body">
                  <form onSubmit={saveKycData}>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">First Name</label>
                          <input
                            class="form-control"
                            placeholder="First Name"
                            type="text"
                            name="fullname"
                           onChange={handleChange}
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
                            name="eamil"
                             onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                            onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            placeholder="Bank Name"
                            type="text"
                            name="fullname"
                           onChange={handleChange}
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
                            name="fullname"
                           onChange={handleChange}
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
                            placeholder="Account Number"
                            type="text"
                            name="fullname"
                           onChange={handleChange}
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
                            placeholder="IFSC Code"
                            type="text"
                            name="fullname"
                           onChange={handleChange}
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
                            placeholder="OTP Code"
                            type="text"
                            name="otp"
                           
                           onChange={handleChange}
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

import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const KYC = () => {
  const [kycSave, SetkycSave] = useState(null);
  const [kyc, setKyc] = useState({});
  const [data, setdata] = useState(null);
  const [error, setError] = useState(false);

  const fetchUserKyc = async () => {
    const userKyc = await axios.get("/kyc");
    if (userKyc.data?.bank) {
      setKyc(userKyc.data.bank);
    }
  };

  const handleChange = (e) => {
    SetkycSave((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const saveKycData = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("kyc-update", kycSave);
      if (response.status == 200 && response.data.bank) {
        toast.success(response.data.message);
        setKyc(response.data.bank);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserKyc();
  }, []);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">KYC</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / KYC Details{" "}
              </a>
            </li>
            {/* <li class="sub-bread">
              <i class="fa fa-angle-right"></i> KYC
            </li> */}
            {/* <li>
              <i class="fa fa-angle-right"></i> KYC Details
            </li> */}
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
                          <label class="control-label">Full Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="fullname"
                            placeholder="Full name..."
                            value={kyc.fullname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">E-mail</label>
                          <input
                            class="form-control"
                            type="text"
                            name="email"
                            disabled
                            placeholder="Email..."
                            onChange={handleChange}
                            value={kyc.email}
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group has-feedback">
                          <label class="control-label">Mobile Number</label>
                          <input
                            class="form-control"
                            type="number"
                            name="mobile"
                            placeholder="Mobile..."
                            value={kyc.mobile}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Document Type</label>
                          <input
                            class="form-control"
                            type="text"
                            name="document"
                            value={kyc.document}
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-briefcase form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Addhar Number</label>
                          <input
                            class="form-control"
                            type="number"
                            name="addharNo"
                            value={kyc.addharNo}
                            placeholder="Addhar number..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Addhar Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="addharName"
                            value={kyc.addharName}
                            placeholder="Addhar Name..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Pan Number</label>
                          <input
                            class="form-control"
                            type="text"
                            name="panNo"
                            value={kyc.panNo}
                            placeholder="Pan Number..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Pan Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="panName"
                            value={kyc.panName}
                            placeholder="Pan Name..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Bank Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="BankName"
                            value={kyc.BankName}
                            placeholder="Bank Name..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">
                            Account Holder Name
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            name="accHolderName"
                            value={kyc.accHolderName}
                            placeholder="Account Holder Name..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Account Number</label>
                          <input
                            class="form-control"
                            type="text"
                            name="accNo"
                            value={kyc.accNo}
                            placeholder="Account Number..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">IFSC code</label>
                          <input
                            class="form-control"
                            type="text"
                            name="ifscCode"
                            value={kyc.ifscCode}
                            placeholder="IFSC Code..."
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-12">
                        <hr />

                        {/* <h6>Bank Detatils</h6> */}
                        <div class="card-header bg-blue">
                          <h6 class="text-white m-b-0">Bank Detatils</h6>
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Bank Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="Inbank"
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">
                            Account Holder Name
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            name="InbankName"
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "20px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">Account Number</label>
                          <input
                            class="form-control"
                            type="text"
                            name="InaccountNumber"
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "22px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">IFSC Code</label>
                          <input
                            class="form-control"
                            type="text"
                            name="InifscCode"
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-4" style={{ marginTop: "22px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">
                            Upload Cancel Cheque / Passbook / Bank
                          </label>
                          <input class="form-control" type="file" name="file" />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>

                      <div class="col-md-4" style={{ marginTop: "22px" }}>
                        <div class="form-group has-feedback">
                          <label class="control-label">OTP Code</label>
                          <input
                            class="form-control"
                            type="text"
                            name="otp"
                            onChange={handleChange}
                          />
                          {/* <span
                            class="fa fa-globe form-control-feedback"
                            aria-hidden="true"
                          ></span>{" "} */}
                        </div>
                      </div>
                      <div class="col-md-12 p-3 " style={{ marginTop: "20px" }}>
                        <button
                          type="submit"
                          class="btn btn-success"
                          disabled={error}
                        >
                          Update Details
                        </button>
                      </div>
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

export default KYC;

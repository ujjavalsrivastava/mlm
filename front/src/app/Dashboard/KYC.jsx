import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const requiredFields = [
  { field: "fullname", name: "Fullname" },
  { field: "mobile", name: "Mobile Number" },
  { field: "addharNo", name: "Addhar Number" },
  { field: "addharName", name: "Addhar Name" },
  { field: "panNo", name: "Pan Number" },
  { field: "panName", name: "Pan Name" },
  { field: "BankName", name: "Bank Name" },
  { field: "accHolderName", name: "Account Holder Name" },
  { field: "accNo", name: "Account Number" },
  { field: "ifscCode", name: "IFSC code" },

  { field: "Inbank", name: "Bank Name" },
  { field: "InbankBranch", name: "Bank Branch" },
  { field: "InbankName", name: "Account Holder Name" },
  { field: "InaccountNumber", name: "Account No" },
  { field: "InifscCode", name: "IFSC code" },
  
];

const KYC = () => {
  const [kyc, setKyc] = useState({});
  const [error, setError] = useState(false);
  const [file, setFile] = useState(false);

  const search = window.location.search;
const params = new URLSearchParams(search);
const userId = params.get('userId');
console.log('userId '+userId);


  const fetchUserKyc = async () => {
   
    const userKyc = (userId) ?  await axios.get(`/kyc?userId=${userId}`) : await axios.get(`/kyc`);
    console.log({ userKyc });

    if (userKyc.data?.bank) {
      setKyc(userKyc.data.bank);
    }
  };

  const handleChange = (e) => {
    setKyc((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const saveKycData = async (e) => {
    e.preventDefault();

    for (let { field, name } of requiredFields) {
      if (!kyc[field]) {
        toast.error(`${name} is required`);
        return;
      }
    }

    try {
      const response = await axios.post("kyc-update", kyc);
      toast.success(response.data.message);
      setKyc(response.data.bank);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchUserKyc();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1 className="text-black">KYC</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / KYC Details{" "}
              </a>
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="row m-t-3">
            <div className="col-lg-12">
              <div className="card ">
                <div className="card-header bg-blue">
                  <h5 className="text-white m-b-0">User KYC</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={saveKycData}>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group has-feedback">
                          <label className="control-label">Full Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="fullname"
                            placeholder="Full name..."
                            value={kyc?.fullname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group has-feedback">
                          <label className="control-label">E-mail</label>
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            disabled
                            placeholder="Email..."
                            onChange={handleChange}
                            value={kyc?.email}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group has-feedback">
                          <label className="control-label">Mobile Number</label>
                          <input
                            className="form-control"
                            type="number"
                            name="mobile"
                            placeholder="Mobile..."
                            value={kyc?.mobile}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Document Type</label>
                          <input
                            className="form-control"
                            type="text"
                            name="document"
                            value={kyc?.document}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Addhar Number</label>
                          <input
                            className="form-control"
                            type="number"
                            name="addharNo"
                            value={kyc?.addharNo}
                            placeholder="Addhar number..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Addhar Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="addharName"
                            value={kyc?.addharName}
                            placeholder="Addhar Name..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Pan Number</label>
                          <input
                            className="form-control"
                            type="text"
                            name="panNo"
                            value={kyc?.panNo}
                            placeholder="Pan Number..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Pan Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="panName"
                            value={kyc?.panName}
                            placeholder="Pan Name..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Bank Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="BankName"
                            value={kyc?.BankName}
                            placeholder="Bank Name..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Account Holder Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="accHolderName"
                            value={kyc?.accHolderName}
                            placeholder="Account Holder Name..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Account Number
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            name="accNo"
                            value={kyc?.accNo}
                            placeholder="Account Number..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">IFSC code</label>
                          <input
                            className="form-control"
                            type="text"
                            name="ifscCode"
                            value={kyc?.ifscCode}
                            placeholder="IFSC Code..."
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <hr />

                        {/* <h6>Bank Detatils</h6> */}
                        <div className="card-header bg-blue">
                          <h6 className="text-white m-b-0">Bank Detatils</h6>
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Bank Name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="Inbank"
                            value={kyc?.Inbank}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Bank Branch</label>
                          <input
                            className="form-control"
                            type="text"
                            name="InbankBranch"
                            value={kyc?.InbankBranch}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Account Holder Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="InbankName"
                            value={kyc?.InbankName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Account Number
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            name="InaccountNumber"
                            value={kyc?.InaccountNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-4" style={{ marginTop: "22px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">IFSC Code</label>
                          <input
                            className="form-control"
                            type="text"
                            name="InifscCode"
                            value={kyc?.InifscCode}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-4" style={{ marginTop: "22px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Upload Cancel Cheque / Passbook / Bank
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            name="file"
                            onChange={handleFile}
                          />
                        </div>
                      </div> */}

                      {/* <div className="col-md-4" style={{ marginTop: "22px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">OTP Code</label>
                          <input
                            className="form-control"
                            type="text"
                            name="otp"
                            onChange={handleChange}
                          />
                        </div>
                      </div> */}
                      <div
                        className="col-md-12 p-3 "
                        style={{ marginTop: "20px" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-success"
                          disabled={error}
                        >
                          Update Details
                        </button>
                      </div>
                      <div className="col-md-12 p-3">&nbsp;</div>
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

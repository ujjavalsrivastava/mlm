import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";

const referal = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  console.log("profile " + JSON.stringify(profile));
  const [data, setdata] = useState(null);
  const [text, setText] = useState(null);
  const [text1, setText1] = useState(null);
  const handleCopy = () => {
    // Copy the input text to the clipboard
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleCopy1 = () => {
    // Copy the input text to the clipboard
    navigator.clipboard
      .writeText(text1)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  useEffect(() => {
    if (profile?.status === "succeeded") {
      setText(profile.data?.referalCode);
      setText1(
        `${window.location.origin}/register?referralCode=${profile.data && profile.data?.referalCode}`
      );
    }
    if (profile?.status !== "succeeded") {
      dispatch(fetchProfile());
      setText(profile.data?.referalCode);
      setText1(
        `${window.location.origin}/register?referralCode=${profile.data && profile.data?.referalCode}`
      );
    } else {
    }
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1 className="text-black">Referral Link Generation</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Referral Link Generation{" "}
              </a>
            </li>
            {/* <li className="sub-bread">
              <i className="fa fa-angle-right"></i> Referral Link Generation
            </li> */}
          </ol>
        </div>

        <div className="content">
          <div className="row m-t-3">
            <div className="col-lg-6">
              <div className="card ">
                <div className="card-header bg-blue">
                  <span className="text-white m-b-0">My Referral Code</span>
                  <button
                    onClick={handleCopy}
                    className="btn btn-info"
                    style={{ float: "right" }}
                  >
                    Copy
                  </button>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group has-feedback">
                        <label className="control-label">Generated Link</label>
                        <input
                          className="form-control"
                          placeholder="Generated Link"
                          type="text"
                          value={text}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card ">
                <div className="card-header bg-blue">
                  <span className="text-white m-b-0">My Referral Code</span>
                  <button
                    onClick={handleCopy1}
                    className="btn btn-info"
                    style={{ float: "right" }}
                  >
                    Copy
                  </button>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group has-feedback">
                        <label className="control-label">Generated Link</label>
                        <input
                          className="form-control"
                          placeholder="Generated Link"
                          type="text"
                          value={text1}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default referal;

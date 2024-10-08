import { useEffect, useState } from "react";
import { fetchProfile } from "../../store/profileReducer";
import { useSelector, useDispatch } from "react-redux";
import axios1 from "axios";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";

const Profile = () => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState([]);

  const profileFun = async () => {
    const response = await axios.get("user/profile");
    setProfile(response.data);
  };
  const [state, setState] = useState(null);
  const [Updateprofile, setUpdateprofile] = useState({});
  const stateFun = async () => {
    try {
      const response = await axios1.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "India",
        }
      );
      setState(response.data.data.states);
    } catch (error) {
      console.log(error);
    }
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    if (!profile.mobile) {
      toast.error("Mobile No is Required");
      return;
    }
    if (!profile.name) {
      toast.error("Name is Required");
      return;
    }
    if (!profile.pincode) {
      toast.error("Pin code is Required");
      return;
    }
    try {
      const response = await axios.post("user/profile", profile);
      if (response) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handle = (e) => {
    setProfile((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    stateFun();
    profileFun();
    if (!profile?._id) {
      dispatch(fetchProfile());
    }
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1 className="text-black">Profile</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Profile
              </a>
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="row m-t-3">
            <div className="col-lg-12">
              <div className="card ">
                <div className="card-header bg-blue">
                  <h5 className="text-white m-b-0">Sponsor Information</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group has-feedback">
                          <label className="control-label">Sponsor Name</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group has-feedback">
                          <label className="control-label">
                            Sponsor Mobile No.
                          </label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-lg-12">
              <div className="card ">
                <div
                  className="card-header"
                  style={{ background: "rgb(88 103 221 / 72%)" }}
                >
                  <h5 className="text-white m-b-0">Personal Information</h5>
                  <p style={{ color: "white" }}>
                    Kindly complete your KYC, to change the name.
                  </p>
                </div>
                <div className="card-body">
                  <form onSubmit={saveProfile}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group has-feedback">
                          <label className="control-label">Name</label>
                          <input
                            className="form-control"
                            name="name"
                            type="text"
                            required
                            title="Name is required"
                            value={profile && profile.name}
                            onChange={handle}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group has-feedback">
                          <label className="control-label">Login Id</label>
                          <input
                            className="form-control"
                            value={profile && profile.email}
                            type="text"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Email Id</label>
                          <input
                            className="form-control"
                            value={profile && profile.email}
                            type="text"
                            name="email"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Mobile No</label>
                          <input
                            className="form-control"
                            name="mobile"
                            value={profile && profile.mobile}
                            onChange={handle}
                            type="text"
                          />
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Gender</label>
                          <select
                            className="form-control"
                            name="gender"
                            onChange={handle}
                          >
                            <option
                              selected={profile && profile.gender == "Male"}
                            >
                              Male
                            </option>
                            <option
                              selected={profile && profile.gender == "Female"}
                            >
                              Female
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Date of Birth</label>
                          <input
                            className="form-control"
                            value={profile && profile.dob}
                            type="date"
                            name="dob"
                            onChange={handle}
                          />
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Country</label>
                          <select
                            className="form-control"
                            name="country"
                            onChange={handle}
                          >
                            <option>
                              {profile && profile.country
                                ? profile.country
                                : "India"}
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">State</label>
                          <select
                            className="form-control"
                            name="state"
                            onChange={handle}
                          >
                            <option>Select Option</option>
                            {Array.isArray(state) &&
                              state.map((row, idx) => (
                                <option
                                  key={`key=${idx}`}
                                  selected={
                                    row.name == profile.state ? true : false
                                  }
                                >
                                  {row && row.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">City</label>
                          <input
                            className="form-control"
                            value={profile && profile.city}
                            type="text"
                            name="city"
                            onChange={handle}
                          />
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Pin Code</label>
                          <input
                            className="form-control"
                            value={profile && profile.pincode}
                            type="number"
                            name="pincode"
                            onChange={handle}
                          />
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Occupation</label>
                          <select
                            className="form-control"
                            name="occupation"
                            onChange={handle}
                          >
                            <option value="">Select Occupation</option>
                            <option
                              value="1"
                              selected={profile && profile.occupation == "1"}
                            >
                              Students
                            </option>
                            <option
                              value="2"
                              selected={profile && profile.occupation == "2"}
                            >
                              Working professionals
                            </option>
                            <option
                              value="3"
                              selected={profile && profile.occupation == "3"}
                            >
                              Entrepreneurs
                            </option>
                            <option
                              value="4"
                              selected={profile && profile.occupation == "4"}
                            >
                              Artists
                            </option>
                            <option
                              value="5"
                              selected={profile && profile.occupation == "5"}
                            >
                              Healthcare workers
                            </option>
                            <option
                              value="6"
                              selected={profile && profile.occupation == "6"}
                            >
                              Educators
                            </option>
                            <option
                              value="7"
                              selected={profile && profile.occupation == "7"}
                            >
                              Service industry workers
                            </option>
                            <option
                              value="8"
                              selected={profile && profile.occupation == "8"}
                            >
                              Engineers
                            </option>
                            <option
                              value="9"
                              selected={profile && profile.occupation == "9"}
                            >
                              Lawyers
                            </option>
                            <option
                              value="10"
                              selected={profile && profile.occupation == "10"}
                            >
                              Accountants
                            </option>
                            <option
                              value="11"
                              selected={profile && profile.occupation == "11"}
                            >
                              Sales professionals
                            </option>
                            <option
                              value="12"
                              selected={profile && profile.occupation == "12"}
                            >
                              Scientists
                            </option>
                            <option
                              value="13"
                              selected={profile && profile.occupation == "13"}
                            >
                              Social workers
                            </option>
                            <option
                              value="14"
                              selected={profile && profile.occupation == "14"}
                            >
                              Tradespeople (e.g. plumbers, electricians)
                            </option>
                            <option
                              value="15"
                              selected={profile && profile.occupation == "15"}
                            >
                              Military personnel
                            </option>
                            <option
                              value="16"
                              selected={profile && profile.occupation == "16"}
                            >
                              Public servants (e.g. government employees)
                            </option>
                            <option
                              value="17"
                              selected={profile && profile.occupation == "17"}
                            >
                              Freelancers
                            </option>
                            <option
                              value="18"
                              selected={profile && profile.occupation == "18"}
                            >
                              Information technology professionals
                            </option>
                            <option
                              value="19"
                              selected={profile && profile.occupation == "19"}
                            >
                              Writers and journalists
                            </option>
                            <option
                              value="20"
                              selected={profile && profile.occupation == "20"}
                            >
                              Musicians and performers
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Language</label>
                          <select
                            className="form-control"
                            name="occupation"
                            onChange={handle}
                          >
                            <option>English</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12" style={{ marginTop: "20px" }}>
                        <div className="form-group has-feedback">
                          <label className="control-label">Address</label>
                          <textarea
                            className="form-control"
                            name="address"
                            onChange={handle}
                            value={profile && profile.address}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-md-12 p-3">
                        <button type="submit" className="btn btn-success">
                          Submit
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

export default Profile;

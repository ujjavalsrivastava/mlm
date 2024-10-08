import { useState } from "react";
import { httpFileAxios } from "../../helper/httpHelper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/profileReducer";

const ProfileUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();

  const handleFile = (e) => {
    const uFile = e.target.files[0];
    if (uFile) {
      const fileType = uFile.type; // Get the file type
      const validTypes = ["image/jpeg", "image/jpg"]; // Acceptable MIME types

      if (!validTypes.includes(fileType)) {
        toast.error("Please upload a valid JPG image."); // Notify the user
        e.target.value = "";
        return;
      }

      setFile(uFile);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePicture", file);
      setLoading(true);
      const response = await httpFileAxios.post(
        "user/profile-picture",
        formData
      );
      setLoading(false);
      dispatch(fetchProfile());
      toast.success(response.data.message);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1 className="text-black">Profile</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Profile Upload{" "}
              </a>
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="row m-t-3">
            <div className="col-lg-12">
              <div className="card ">
                <div className="card-header bg-blue">
                  <h5 className="text-white m-b-0">User Profile</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group has-feedback">
                          <label className="custom-file center-block block">
                            <input
                              id="file"
                              className="custom-file-input"
                              type="file"
                              accept=".jpg, .jpeg, .png"
                              required
                              onChange={handleFile}
                            />
                          </label>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-success"
                          disabled={loading}
                        >
                          {loading
                            ? "Processing..."
                            : profile.image
                              ? "Update Image"
                              : "Upload Image"}
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
export default ProfileUpload;

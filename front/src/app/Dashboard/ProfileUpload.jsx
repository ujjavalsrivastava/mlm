import { useState } from "react";
import { httpFileAxios } from "../../helper/httpHelper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/profileReducer";

const ProfileUpload = () => {
  const [file, setFile] = useState(null);
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
      const response = await httpFileAxios.post(
        "user/profile-picture",
        formData
      );
      dispatch(fetchProfile());
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1 class="text-black">Profile</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Profile Upload{" "}
              </a>
            </li>
          </ol>
        </div>

        <div class="content">
          <div class="row m-t-3">
            <div class="col-lg-12">
              <div class="card ">
                <div class="card-header bg-blue">
                  <h5 class="text-white m-b-0">User Profile</h5>
                </div>
                <div class="card-body">
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group has-feedback">
                          <label class="custom-file center-block block">
                            <input
                              id="file"
                              class="custom-file-input"
                              type="file"
                              onChange={handleFile}
                              accept=".jpg, .jpeg"
                            />
                          </label>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div class="col-md-12">
                        <button type="submit" class="btn btn-success">
                          {profile.image ? "Update Image" : "Upload Image"}
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

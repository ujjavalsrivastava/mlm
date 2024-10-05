import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import play from "./../../../public/dist/img/play.png";
const MyCouseDetails = () => {
  const [course, setcourse] = useState(null);
  const [videoData, setVideoData] = useState({});
  const { id } = useParams();

  const courseVideo = async () => {
    try {
      const response = await axios.get(`vimeo/video?courseId=${id}`);
      const data = response?.data?.data || [];
      setcourse(data);
      setVideoData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    courseVideo();
  }, []);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h5>My Course </h5>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Course Details
              </a>
            </li>
          </ol>
        </div>

        <div class="content">
          <div class="row">
            <div class="col-lg-8 m-b-3">
              <div
                class="ml-auto modal-iframe-wrapper video-container"
                dangerouslySetInnerHTML={{ __html: videoData.embed }}
              ></div>
              <div style={{ padding: "15px" }}>
                <h6>{videoData.name}</h6>
              </div>
            </div>
            <div class="col-lg-4 m-b-3">
              <div>
                <div class="box box-widget widget-user-2">
                  <div class="widget-user-header bg-yellow">
                    <h6 style={{ color: "white", marginTop: "14px" }}>
                      Our Courses
                    </h6>
                    {/* <h5>Checkout my contacts here</h5> */}
                  </div>
                  <ul
                    class="products-list product-list-in-box scroll"
                    style={{ height: "430px" }}
                  >
                    {course &&
                      course.map((row, index) => (
                        <li class="item">
                          <div class="videoContainer">
                            <p>{index + 1}.</p>
                            <img src={play} alt="Product Image" />
                            <a
                              href="javascript:void(0)"
                              onClick={() => setVideoData(row)}
                              class="product-title"
                              style={{ color: "black" }}
                            >
                              {row.name}
                            </a>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyCouseDetails;

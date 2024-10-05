import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import VimeoVideo from "./VimeoVideo";
import play from "./../../../public/dist/img/play.png";
const MyCouseDetails = () => {
  const [course, setcourse] = useState(null);
  const [video, setvideo] = useState(null);
  const [videoName, setvideoName] = useState(null);
  const { id } = useParams();
  console.log("courseId " + id);

  const courseVideo = async () => {
    try {
      const response = await axios.get(`vimeo/video?courseId=${id}`);
      setcourse(response.data.data);
      getVideo(
        response.data.data[0]?.player_embed_url,
        response.data.data[0]?.name
      );
    } catch (error) {
      console.log(error);
    }
  };
  const getVideo = (videoId, name) => {
    setvideoName(name);
    setvideo(videoId);
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
            =
          </ol>
        </div>

        <div class="content">
          <div class="row">
            <div class="col-lg-8 m-b-3">
              <div class="ml-auto modal-iframe-wrapper video-container">
                {video && (
                  <iframe
                    src={`${video}&app_id=477203`}
                    frameborder="0"
                    allowfullscreen
                    title="Vimeo Video"
                  ></iframe>
                )}
              </div>
              <div style={{ padding: "15px" }}>
                <h6>{videoName && videoName}</h6>
              </div>
            </div>
            <div class="col-lg-4 m-b-3">
              <div>
                <div class="box box-widget widget-user-2">
                  <div class="widget-user-header bg-yellow">
                    <h6 style={{ color: "white", marginTop: "14px" }}>
                      Digital Marketing
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
                              onClick={() =>
                                getVideo(row.player_embed_url, row.name)
                              }
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

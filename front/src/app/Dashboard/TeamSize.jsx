import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";

const TeamSize = () => {
  const [data, setData] = useState(null);
  const levelFun = async () => {
    try {
      const response = await axios.get("user/level-status");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    levelFun();
  }, []);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Level Wise Report </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Level Wise Reports
              </a>
            </li>
            {/* <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div class="content">
          <div class="row">
            <div class="col-12">
              {(() => {
                const arr = [];
                const len = data?.totalByLevel
                  ? Object.keys(data?.totalByLevel).length
                  : 0;

                for (let i = 2; i <= len; i++) {
                  arr.push(
                    <div class="info-box">
                      <div class="row">
                        <div class="col-lg-4 col-sm-6 col-xs-12">
                          <div>
                            <i class="ti-face-smile f-20 text-blue"></i>
                            <div
                              class="info-box-content"
                              style={{ padding: "16px" }}
                            >
                              <h2 class="f-25 text-black">Level {i - 1}</h2>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-xs-12">
                          <div>
                            <i class="ti-face-smile f-20 text-blue"></i>
                            <div class="info-box-content">
                              <h4 class="f-25 text-black">
                                {data?.createdTodayByLevel?.[i] || 0}
                              </h4>
                              <span
                                class="progress-description"
                                style={{ color: "black" }}
                              >
                                Today's Team Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-xs-12">
                          <div>
                            <i class="ti-bar-chart f-20 text-danger"></i>
                            <div class="info-box-content">
                              <h4 class="f-25 text-black">
                                {data?.totalByLevel?.[i] || 0}
                              </h4>
                              <span
                                class="progress-description"
                                style={{ color: "black" }}
                              >
                                All Time Team Size
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return arr;
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamSize;

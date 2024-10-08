import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import moment from "moment";
import { fetchProfile } from "../../store/profileReducer";

const MemberDashboard = () => {
  const [todayDirectTeam, setTodayDirectTeam] = useState(0);
  const [group, setgroup] = useState(0);
  const [showBal, setShowBal] = useState(0);

  const lowerProfiles = useSelector((state) => state.levels);
  const [usersTotalEarnings, setUsersTotalEarnings] = useState([]);
  const [AllTimeDirectTeam, setAllTimeDirectTeam] = useState(0);
  const user = useSelector((state) => state.profile?.data || {});
  const dispatch = useDispatch();

  const lowerLevels = lowerProfiles?.data[0]?.lowerLevel || [];
  const fetchUsersEarnings = async (userIds) => {
    try {
      const response = await axios({
        method: "get",
        url: `user/total-earning?userId=${userIds.join(",")}`,
      });
      if (response.data?.length) {
        setUsersTotalEarnings(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (usersTotalEarnings.length !== lowerLevels.length) {
      const userIds = lowerLevels.map((u) => u._id);

      userIds.length && fetchUsersEarnings(userIds);
    }
  }, [lowerLevels]);

  const fetchPurchage = async () => {
    try {
      const response = await axios.get("user/lower-users");
      setAllTimeDirectTeam(response.data[0]?.lowerLevel.length);
      let todayTeamcout = 0;
      const todayteam = await response.data[0]?.lowerLevel.map((row) => {
        const d1 = moment(new Date()).format("DD/MM/YYYY");
        const d2 = moment(new Date(row.createdAt)).format("DD/MM/YYYY");

        if (d1 == d2) {
          todayTeamcout += 1;
        }
      });

      setTodayDirectTeam(todayTeamcout);
    } catch (error) {
      console.log(error.message);
    }
  };

  const groupStatus = async () => {
    try {
      const response = await axios.get("user/group-status");
      setgroup(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const showBalance = async (id) => {
    const response = await axios.get("user/percent-earning?userId=" + id);
    setShowBal(response.data);
  };

  useEffect(() => {
    fetchPurchage();
    groupStatus();
    if (!user?._id) {
      dispatch(fetchProfile());
    } else {
      showBalance(user?._id);
    }

    if (lowerProfiles.status !== "succeeded") {
      dispatch(fetchLowerProfiles());
    }
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>Welcome {user && user.name}! </h1>
          <ol className="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Affiliate Panel{" "}
              </a>
            </li>
            {/* <li>
              <i className="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-12">
              <div className="info-box">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-face-smile f-20 text-blue"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {showBal && showBal.oneDayEarning.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          Today's Earning
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-bar-chart f-20 text-danger"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {showBal && showBal.oneWeekEarning.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          Last 7 Days Earning
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-panel f-20 text-info"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {showBal && showBal.oneMonthEarning.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          Last 30 Days Earning
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-wallet f-20 text-green"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {showBal && showBal.overallEarning.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          All Time Earning
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-box">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-face-smile f-20 text-blue"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {todayDirectTeam.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          Today Direct Team
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-bar-chart f-20 text-danger"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {AllTimeDirectTeam.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          All Time Direct Team
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-panel f-20 text-info"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {group && group.todayGroupUser.toFixed(2)}
                        </h1>
                        <span className="progress-description">Today Team</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i className="ti-wallet f-20 text-green"></i>
                      <div className="info-box-content">
                        <h1 className="f-25 text-black">
                          {group && group.totalGroupUser.toFixed(2)}
                        </h1>
                        <span className="progress-description">
                          All Team Size
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="info-box">
                {/* <div className="col-12">
                  <div className="d-flex flex-wrap">
                    <div>
                      <h5>Area Chart</h5>
                    </div>
                    <div className="ml-auto">
                      <ul className="list-inline">
                        <li className="text-purple">
                          <i className="fa fa-circle"></i> India
                        </li>
                        <li className="text-muted">
                          <i className="fa fa-circle"></i> USA
                        </li>
                        <li className="text-info">
                          <i className="fa fa-circle"></i> UK
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div id="area"></div>
              </div>
            </div>
            <div className="col-lg-4 m-b-3">
              <div>
                <div className="box box-widget widget-user-2">
                  <div className="widget-user-header bg-yellow">
                    <h5 style={{ color: "white" }}>Your Recent Sales</h5>
                    {/* <h5>Checkout my contacts here</h5> */}
                  </div>
                  <ul
                    className="products-list product-list-in-box scroll"
                    style={{ height: "311px" }}
                  >
                    {lowerLevels.map((lUser, idx) => (
                      <li className="item" key={`key=${idx}`}>
                        <div className="product-img">
                          <img
                            src="./dist/img/img1.jpg"
                            alt="Product Image"
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                        <div className="product-info">
                          <a
                            href="#"
                            className="product-title"
                            style={{
                              color: "black",
                              fontWeight: "bold",
                              textTransform: "capitalize",
                            }}
                          >
                            {lUser.name}
                          </a>
                          <span className="product-description">
                            <a href="#" style={{ color: "black" }}>
                              {usersTotalEarnings.length
                                ? `₹${
                                    usersTotalEarnings
                                      .find((u) => u.userId === lUser._id)
                                      ?.totalEarning.toFixed(2) || 0
                                  }` || "₹0"
                                : "₹0"}
                            </a>
                          </span>
                        </div>
                      </li>
                    ))}

                    {lowerLevels.length == 10 ? (
                      <span className="product-description">
                        <a href="#" style={{ color: "black" }}>
                          Data Not Found
                        </a>
                      </span>
                    ) : null}
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
export default MemberDashboard;

import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import moment from 'moment'

const MemberDashboard = () => {
  const [todayDirectTeam, setTodayDirectTeam] = useState(0);
  const [group, setgroup] = useState(0);
  const lowerProfiles = useSelector((state) => state.levels);
  const [usersTotalEarnings, setUsersTotalEarnings] = useState([]);
  const [AllTimeDirectTeam, setAllTimeDirectTeam] = useState(0);
  
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
      //const total = response[0].lowerLevel.reduce((acc, item) => acc + item.value, 0);
       // setSum(total);
       setAllTimeDirectTeam(response.data[0]?.lowerLevel.length)
        let todayTeamcout = 0;
       const todayteam = await response.data[0]?.lowerLevel.map((row) => {
        const d1 =moment(new Date()).format('DD/MM/YYYY') ;
        const d2 = moment(new Date(row.createdAt)).format('DD/MM/YYYY');
        console.log('d1 '+d1);
        console.log('d2 '+d2);
        if(d1 == d2){
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

  const [user, setuser] = useState({});

  const fetchProfile = async () => {
    const response = await axios.get("user/profile");
    setuser(response.data);
  };
 
  // const cnt = purchageHistry.length;

  //  for (var i=0; i<cnt; i++) {
  //      total += purchageHistry[i].amount;
  //  }
  // console.log('toatl '+ data);
  useEffect(() => {
    fetchPurchage();
    fetchProfile();
    groupStatus();
    if (lowerProfiles.status !== "succeeded") {
      dispatch(fetchLowerProfiles());
    }
  }, []);
  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Welcome {user && user.name}! </h1>
          <ol class="breadcrumb">
            <li>
            <a href="#" style={{color:'black'}}>Home /  Affiliate Panel </a>
            </li>
            {/* <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div class="content">
          <div class="row">
            <div class="col-12">
              <div class="info-box">
                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-face-smile f-20 text-blue"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                          {group && group.todayTeamEarning.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          Today's Earning
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "40%", height: "6px" }}
                        >
                          <span class="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-bar-chart f-20 text-danger"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                        {group && group.total7DaysEarning.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          Last 7 Days Earning
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "50%", height: "6px" }}
                        >
                          <span class="sr-only">50% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-panel f-20 text-info"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                        {group && group.total30DaysEarning.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          Last 30 Days Earning
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "65%", height: "6px" }}
                        >
                          <span class="sr-only">65% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-wallet f-20 text-green"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                          {group && group.totalTeamEarning.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          All Time Earning
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-green"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "85%", height: "6px" }}
                        >
                          <span class="sr-only">85% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div class="info-box">
                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-face-smile f-20 text-blue"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                         {todayDirectTeam.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          Today Direct Team
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "40%", height: "6px" }}
                        >
                          <span class="sr-only">30% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-bar-chart f-20 text-danger"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                         {AllTimeDirectTeam.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          All Time Direct Team
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "50%", height: "6px" }}
                        >
                          <span class="sr-only">50% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-panel f-20 text-info"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                          {group && group.todayGroupUser.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          Today Team
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "65%", height: "6px" }}
                        >
                          <span class="sr-only">65% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-wallet f-20 text-green"></i>
                      <div class="info-box-content">
                        <h1 class="f-25 text-black">
                          {group && group.totalGroupUser.toFixed(2)}
                        </h1>
                        <span class="progress-description">
                          All Team Sise
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-green"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "85%", height: "6px" }}
                        >
                          <span class="sr-only">85% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        
          <div class="row">
            <div class="col-lg-8">
              <div class="info-box">
                {/* <div class="col-12">
                  <div class="d-flex flex-wrap">
                    <div>
                      <h5>Area Chart</h5>
                    </div>
                    <div class="ml-auto">
                      <ul class="list-inline">
                        <li class="text-purple">
                          <i class="fa fa-circle"></i> India
                        </li>
                        <li class="text-muted">
                          <i class="fa fa-circle"></i> USA
                        </li>
                        <li class="text-info">
                          <i class="fa fa-circle"></i> UK
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div id="area"></div>
              </div>
           
            </div>
            <div class="col-lg-4 m-b-3">
              <div>
                <div class="box box-widget widget-user-2">
                  <div class="widget-user-header bg-yellow">
                    <h5 style={{color:'white'}}>Your Recent Sales</h5>
                    {/* <h5>Checkout my contacts here</h5> */}
                  </div>
                  <ul class="products-list product-list-in-box scroll" style={{height:"311px"}}>
                    {lowerLevels.map((lUser) => (
                      <li class="item">
                        <div class="product-img">
                          <img src="./dist/img/img1.jpg" alt="Product Image" style={{borderRadius:'50%'}}
                            />
                        </div>
                        <div class="product-info">
                          <a href="#" class="product-title" style={{color:'black',fontWeight: 'bold', textTransform: 'capitalize'}}>
                            {lUser.name}
                          </a>
                          <span class="product-description">
                            <a href="#" style={{color:'black'}}>
                              {usersTotalEarnings.length
                                ? `₹${
                                    usersTotalEarnings.find(
                                      (u) => u.userId === lUser._id
                                    )?.totalEarning || 0
                                  }` || "₹0"
                                : "₹0"}
                            </a>
                          </span>
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
export default MemberDashboard;

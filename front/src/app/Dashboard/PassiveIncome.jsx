import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";

const PassiveIncome = () => {
  const [data, setData] = useState([]);


  const lowerProfiles = useSelector((state) => state.levels);
  const [usersTotalEarnings, setUsersTotalEarnings] = useState([]);
  const [AllTimeDirectTeam, setAllTimeDirectTeam] = useState(0);
  
  const dispatch = useDispatch();

  const lowerLevels = lowerProfiles?.data[0]?.lowerLevel || [];
  console.log('dddd '+ JSON.stringify(lowerLevels));

  const rewardsFun = async () => {
    try {
      const response = await axios.get("user/rewards");
      setData(response.data.rewards);
    } catch (error) {
      console.log(error);
    }
  };

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
    rewardsFun();
    if (lowerProfiles.status !== "succeeded") {
      dispatch(fetchLowerProfiles());
    }
  }, []);

  useEffect(() => {
    if (usersTotalEarnings.length !== lowerLevels.length) {
      const userIds = lowerLevels.map((u) => u._id);

      userIds.length && fetchUsersEarnings(userIds);
    }
  }, [lowerLevels]);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Passive Income </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Passive Income 
              </a>
            </li>
            {/* <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div class="content">
          <div class="row">



          <div class="col-6">
            <table class="table">
  <thead class="thead-dark">
    <tr>
    <th scope="col">S.R</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      
    </tr>
  </thead>
  
  {lowerLevels.map((lUser , i) => (

      <tr>
        <th scope="row">{i + 1}</th>
        <td>{lUser.name}</td>
        <td>   {usersTotalEarnings.length
                                ? `₹${
                                    usersTotalEarnings.find(
                                      (u) => u.userId === lUser._id
                                    )?.totalEarning || 0
                                  }` || "₹0"
                                : "₹0"}</td>

        </tr>
     ))}
      
 
</table>


            </div>

            <div class="col-6">
            <table class="table">
  <thead class="thead-dark">
    <tr>
    <th scope="col">S.R</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      <th scope="col">Remarks</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  
  {data && data.map((row,i) =>(
    row.isMonthlyReward ? (

      <tr>
        <th scope="row">{i + 1}</th>
        <td>{row?.user?.name}</td>
        <td>{row.amount}</td>
        <td>{row.remark}</td>
        
        <td>{row.createdAt}</td>
        </tr>
    ):null     
        
        
   
   ))}
  
      
 
</table>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PassiveIncome;

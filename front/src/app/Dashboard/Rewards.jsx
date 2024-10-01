import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";

const Rewards = () => {
  const [data, setData] = useState([]);


  const lowerProfiles = useSelector((state) => state.levels);
  const [usersTotalEarnings, setUsersTotalEarnings] = useState([]);
  const [AllTimeDirectTeam, setAllTimeDirectTeam] = useState(0);
  
  const dispatch = useDispatch();
  
  const lowerLevels = lowerProfiles?.data[0]?.lowerLevel || [];
  const [userArr, setUserArr] = useState([]);

  useEffect(() => {
    const fetchUserEarnings = async () => {
      let serialNo = 1; // Initialize the serial number
  
      // Flatten the tree structure into a list and assign depth level
      const flattenHierarchy = (users, depth = 1) => {
        let flatUsers = [];
        for (const user of users) {
          flatUsers.push({ ...user, depth }); // Add the depth to user data
          if (user.lowerLevel && depth < 4) {
            flatUsers = [...flatUsers, ...flattenHierarchy(user.lowerLevel, depth + 1)];
          }
        }
        return flatUsers;
      };
  
      // Assuming lowerLevels is a prop or coming from an API
      const flatUsers = flattenHierarchy(lowerLevels);
  
      const rows = flatUsers.map((user) => (
        <tr key={serialNo}>
          <td>{serialNo++}</td>
          <td>{user.name}</td>
        
        </tr>
      ));
  
      setUserArr(rows);
    };
  
    fetchUserEarnings();
  }, [lowerLevels]);


 

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
          <h1>Rewards </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Rewards 
              </a>
            </li>
            {/* <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div class="content">
          <div class="row">
          <div class="col-lg-4 col-sm-12">
            <table class="table">
  <thead class="thead-dark">
  <tr>
    <th colspan="3" style={{textAlign:'center'}}> Direct Team</th>

      
    </tr>
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
                                : "₹0"}
                                
          </td>

        </tr>
     ))}
      
 
</table>


            </div>

            <div class="col-lg-4 col-sm-12">
            <table class="table">
  <thead class="thead-dark">
  <tr>
    <th colspan="2" style={{textAlign:'center'}}> 1 to 4 Level Team</th>
    </tr>
    <tr>
    <th scope="col">S.R</th>
      <th scope="col">Name</th>
     
      
    </tr>
  </thead>
  {userArr}


      
 
</table>


            </div>

            <div class="col-lg-4 col-sm-12">
            <table class="table">
  <thead class="thead-dark">
  <tr>
    <th colspan="5" style={{textAlign:'center'}}> Reward Income</th>
    </tr>
  <tr>
  <th scope="col">S.R</th>
    <th scope="col">Name</th>
    <th scope="col">Amount</th>
    <th scope="col">Remarks</th>
    <th scope="col">Date</th>
  </tr>
</thead>

{data && data.map((row,i) =>(
  !row.isMonthlyReward ? (

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
export default Rewards;

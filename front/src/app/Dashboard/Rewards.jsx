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

      const processRow = async (row, serial, depth) => {
        if (depth > 4) return []; // Stop if depth exceeds 4

        const response = await axios.get("user/percent-earning?userId=" + row._id);
        
        const currentRow = (
          <tr key={serial.current}>
            <td>{serial.current++}</td> {/* Increment the serial number */}
            <td>{row.name}</td>
            <td>{response.data.overallEarning}</td>
          </tr>
        );

        const rows = [currentRow]; // Start with the current row

        // Process lower levels if any and increment depth
        if (row.lowerLevel) {
          for (const lowerRow of row.lowerLevel) {
            rows.push(...(await processRow(lowerRow, serial, depth + 1))); // Recursive call with incremented depth
          }
        }

        return rows;
      };

      const serial = { current: serialNo }; // Using an object to pass by reference

      const results = await Promise.all(
        lowerLevels.map(async (row) => await processRow(row, serial, 1)) // Start with depth 1
      );

      setUserArr(results.flat());
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
    <th colspan="3" style={{textAlign:'center'}}> 1 to 4 Level Team</th>
    </tr>
    <tr>
    <th scope="col">S.R</th>
      <th scope="col">Name</th>
      <th scope="col">Amount</th>
      
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

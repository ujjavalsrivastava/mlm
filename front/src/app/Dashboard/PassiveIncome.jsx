import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";

const PassiveIncome = () => {
  const [data, setData] = useState([]);
  const rewardsFun = async () => {
    try {
      const response = await axios.get("user/rewards");
      setData(response.data.rewards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    rewardsFun();
  }, []);

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
            <div class="col-12">
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

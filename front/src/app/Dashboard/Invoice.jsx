import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";

const Invoice = () => {
  const [data, setData] = useState([]);

  const invoiceFun = async () => {
    try {
      const response = await axios.get("user/invoice");
      setData(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  console.log('data '+ JSON.stringify(data))

  useEffect(() => {
    invoiceFun();
    
  }, []);

  

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Invoice </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Invoice 
              </a>
            </li>
            {/* <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li> */}
          </ol>
        </div>

        <div class="content">
          <div class="row">




            <div class="col-lg-12 col-sm-12">
            <table class="table">
  <thead class="thead-dark">
  <tr>
    <th colspan="7" style={{textAlign:'center'}}> Invoice</th>
    </tr>
    <tr>
    <th scope="col">S.R</th>
      <th scope="col">Course Name</th>
      <th scope="col">Amount</th>
      <th scope="col">GST</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
      <th scope="col">Timestap</th>
    </tr>
  </thead>
  
  {data && data.map((row,i) =>(


      <tr>
        <th scope="row">{i + 1}</th>
        <td>Digital Entrepreneurship Bundles
        </td>
        <td>2499</td>
        <td>449.82</td>
        <td>2948.82</td>
        <td>{row.status}</td>
        <td>{row.timestamp}</td>
        </tr>
     
        
        
   
   ))}
  
      
 
</table>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Invoice;

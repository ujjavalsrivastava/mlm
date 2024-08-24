import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";

const MyCouseDetails = () => {
  const [totalSum, settotalSum] = useState(0);
 
  const [user, setuser] = useState({});

 
  // const cnt = purchageHistry.length;

  //  for (var i=0; i<cnt; i++) {
  //      total += purchageHistry[i].amount;
  //  }
  // console.log('toatl '+ data);

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>My Course </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Dashboard
            </li>
          </ol>
        </div>

        <div class="content">
          
        
          <div class="row">
            <div class="col-lg-8">
              <div class="info-box">
                <div class="col-12">
                  <div class="d-flex flex-wrap">
                    <div>
                      <h6>What is Digital Marketing</h6>
                    </div>
                    <div class="ml-auto">
                     
                    </div>
                  </div>
                </div>
                <div id="area"></div>
              </div>
              
            </div>
            <div class="col-lg-4 m-b-3">
              <div>
                <div class="box box-widget widget-user-2">
                  <div class="widget-user-header bg-yellow">
                    <h3>Digital Marketing</h3>
                    {/* <h5>Checkout my contacts here</h5> */}
                  </div>
                  <ul class="products-list product-list-in-box">
                    
                      <li class="item">
                        <div class="">
                          <img src="https://www.bizgurukul.com/Biz/members/BizPro/imgs/play-button.png" alt="Product Image" />
                          <a href="#" class="product-title">
                           test
                          </a>
                        </div>
                        
                </li>
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

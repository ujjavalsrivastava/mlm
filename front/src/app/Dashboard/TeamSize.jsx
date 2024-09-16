import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import { RiH4 } from "@remixicon/react";

const TeamSize = () => {
const[data,setData]=useState(null)
    const levelFun =async()=>{
    try{
      const response = await axios.get('user/level-status');
      setData(response.data);
    }catch(error){
      console.log(error);
    }
  }

var len = $.map(data?.totalByLevel, function(n, i) { return i; }).length;

  useEffect(()=>{
    levelFun();
    },[])

  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Level Wise Report  </h1>
          <ol class="breadcrumb">
            <li>
            <a href="#" style={{color:'black'}}>Home /  Level Wise Report </a>
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
            for (let i = 1; i <= len; i++) {
            
              
                arr.push(
                  <div class="info-box">
                  <div class="row">
                  <div class="col-lg-4 col-sm-6 col-xs-12">
                      <div>
                        <i class="ti-face-smile f-20 text-blue"></i>
                        <div class="info-box-content" style={{padding:'16px'}}>
                        <h2 class="f-25 text-black">
                            Level {i}
                          </h2>
                         
                        </div>
                        
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                      <div>
                        <i class="ti-face-smile f-20 text-blue"></i>
                        <div class="info-box-content">
                          <h4 class="f-25 text-black">
                            {data?.createdTodayByLevel?.[i]}
                          </h4>
                          <span class="progress-description" style={{color:'black'}}>
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
                          {data?.totalByLevel?.[i]}
                          </h4>
                          <span class="progress-description" style={{color:'black'}}>
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

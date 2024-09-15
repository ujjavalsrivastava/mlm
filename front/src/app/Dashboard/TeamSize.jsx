import { useEffect, useState } from "react";
import { axios } from "../../helper/httpHelper";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import { RiH4 } from "@remixicon/react";

const TeamSize = () => {
 
  return (
    <>
      <div class="content-wrapper">
        <div class="content-header sty-one">
          <h1>Welcome </h1>
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
            <div class="col-12">
              <div class="info-box">
                <div class="row">
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-face-smile f-20 text-blue"></i>
                      <div class="info-box-content">
                      <h2 class="f-25 text-black">
                          Level 1
                        </h2>
                       
                      </div>
                      
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div>
                      <i class="ti-face-smile f-20 text-blue"></i>
                      <div class="info-box-content">
                        <h4 class="f-25 text-black">
                          0
                        </h4>
                        <span class="progress-description">
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
                                0
                        </h4>
                        <span class="progress-description">
                        All Time Team Size
                        </span>
                      </div>
                     
                    </div>
                  </div>
               
                </div>
              </div>


              
            </div>
          </div>

        
        </div>
      </div>
    </>
  );
};
export default TeamSize;

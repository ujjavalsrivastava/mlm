import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import "./Tree.css";
import { axios } from "../../helper/httpHelper";

const Tree = () => {
  const lowerProfile = useSelector((state) => state.levels);

  const [showBal, setShowBal] = useState({});

  const dispatch = useDispatch();

  const showBalance = async (id) => {
    const response = await axios.get("user/percent-earning?userId=" + id);
    setShowBal(response.data);
  };
  useEffect(() => {
    if (lowerProfile.status !== "succeeded") {
      dispatch(fetchLowerProfiles());
    }
  }, []);

  const renderNode = (node) => (
    <li key={node._id}>
      <div class="image text-center">
        <img
          src="dist/img/img1.jpg"
          class="img-circle"
          alt="User Image"
          height={"50px"}
        />
      </div>
      <div>
        <a
          href="javascript:void(0)"
          data-toggle="modal"
          data-target="#balanceModal"
          onClick={() => showBalance(node._id)}
          style={{color:'black',fontWeight: 'normal', textTransform: 'capitalize'}}
        >
          {node.name}
        </a>
      </div>
      {Array.isArray(node.lowerLevel) && node.lowerLevel[0]?._id && (
        <ul>{node.lowerLevel.map((child) => renderNode(child))}</ul>
      )}
    </li>
  );

  return (
    <>
    <div className="App">
     <div class="content-header sty-one">
          <h1 class="text-black" style={{marginLeft:'225px'}}> Hierarchy</h1>
          <ol class="breadcrumb">
            <li>
            <a href="#" style={{color:'black'}}>Home / Hierarchy </a>
            </li>
            {/* <li class="sub-bread">
              <i class="fa fa-angle-right"></i> Change Password
            </li>
            <li>
              <i class="fa fa-angle-right"></i> Password
            </li> */}
          </ol>
        </div>
      
        <div className="custom-tree tree-sidebar" >
          <div class="org-chart">
            {lowerProfile?.data?.map((rootNode) => (
              <ul>{renderNode(rootNode)}</ul>
            ))}
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="balanceModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Show Balance
              </h5>
              <button
                type="button"
                class="close closebtn"
                data-dismiss="modal"
                aria-label="Close"
              >
               <span aria-hidden="true" style={{fontWeight: 'bold'}}>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-3 col-xs-6">
                  <div class="info-box">
                    <span class="info-box-icon bg-aqua">
                      <i class="icon-briefcase"></i>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-number">
                        {showBal && parseInt(showBal.oneDayEarning) }
                      </span>
                      <span class="info-box-text">Today's</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-xs-6">
                  <div class="info-box">
                    <span class="info-box-icon bg-green">
                      <i class="icon-pencil"></i>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-number">
                        {showBal && parseInt(showBal.oneWeekEarning)}
                      </span>
                      <span class="info-box-text">Last 7 Days</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-xs-6">
                  <div class="info-box">
                    <span class="info-box-icon bg-yellow">
                      <i class="icon-wallet"></i>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-number">
                        {showBal && parseInt(showBal.oneMonthEarning)}
                      </span>
                      <span class="info-box-text">Last 30 Days</span>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-xs-6">
                  <div class="info-box">
                    <span class="info-box-icon bg-red">
                      <i class="icon-layers"></i>
                    </span>
                    <div class="info-box-content">
                      <span class="info-box-number">
                        {showBal && parseInt(showBal.overallEarning)}
                      </span>
                      <span class="info-box-text">All Time</span>
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

export default Tree;

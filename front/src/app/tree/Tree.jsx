import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import "./Tree.css";
import { axios } from "../../helper/httpHelper";

const Tree = () => {
  const lowerProfile = useSelector((state) => state.levels);

  const [showBal, setShowBal] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const showBalance = async (id) => {
    const response = await axios.get("user/percent-earning?userId=" + id);
    setShowBal(response.data);
    setShowModal(true);
  };

  console.log(showModal);
  useEffect(() => {
    if (lowerProfile.status !== "succeeded") {
      dispatch(fetchLowerProfiles());
    }
  }, []);

  const renderNode = (node) => (
    <li key={node._id}>
      <div className="image text-center">
        <img
          src="dist/img/img1.jpg"
          className="img-circle"
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
          style={{
            color: "black",
            fontWeight: "normal",
            textTransform: "capitalize",
          }}
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
      <div className="content-wrapper treeContainerElement">
        <div class="content-header sty-one">
          <h1 class="text-black">Hierarchy</h1>
          <ol class="breadcrumb">
            <li>
              <a href="#" style={{ color: "black" }}>
                Home / Hierarchy
              </a>
            </li>
          </ol>
        </div>
        <div className="custom-tree tree-sidebar">
          <div class="org-chart">
            {lowerProfile?.data?.map((rootNode) => (
              <ul>{renderNode(rootNode)}</ul>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Show Balance
              </h5>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="close closebtn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{ fontWeight: "bold" }}>
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-3 col-xs-6">
                  <div className="info-box">
                    <span className="info-box-icon bg-aqua">
                      <i className="icon-briefcase"></i>
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-number">
                        {showBal && parseInt(showBal.oneDayEarning)}
                      </span>
                      <span className="info-box-text">Today's</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-xs-6">
                  <div className="info-box">
                    <span className="info-box-icon bg-green">
                      <i className="icon-pencil"></i>
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-number">
                        {showBal && parseInt(showBal.oneWeekEarning)}
                      </span>
                      <span className="info-box-text">Last 7 Days</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-xs-6">
                  <div className="info-box">
                    <span className="info-box-icon bg-yellow">
                      <i className="icon-wallet"></i>
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-number">
                        {showBal && parseInt(showBal.oneMonthEarning)}
                      </span>
                      <span className="info-box-text">Last 30 Days</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-xs-6">
                  <div className="info-box">
                    <span className="info-box-icon bg-red">
                      <i className="icon-layers"></i>
                    </span>
                    <div className="info-box-content">
                      <span className="info-box-number">
                        {showBal && parseInt(showBal.overallEarning)}
                      </span>
                      <span className="info-box-text">All Time</span>
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

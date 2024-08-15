import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import "./Tree.css";

const Tree = () => {
  const lowerProfile = useSelector((state) => state.levels);
  console.log({ lowerProfile });

  const dispatch = useDispatch();

  const showBalance = async(id)=>{
   console.log(id);
   
  }
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
      <div> <a href="javascript:void(0)" data-id={node._id} onClick={() => showBalance(node._id)}>{node.name}</a></div>
      {Array.isArray(node.lowerLevel) && node.lowerLevel.length > 0 && (
        <ul>{node.lowerLevel.map((child) => renderNode(child))}</ul>
      )}
    </li>
  );

  return (
    <div className="App">
      <div className="custom-tree">
        <div class="org-chart">
          {lowerProfile?.data?.map((rootNode) => (
            <ul>{renderNode(rootNode)}</ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tree;

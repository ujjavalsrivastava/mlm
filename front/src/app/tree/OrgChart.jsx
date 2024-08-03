import React, { useEffect, useState } from "react";
import "./Tree.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";

const OrgChart = ({ data }) => {
  const lowerPofiles = useSelector((state) => state.levels);
  console.log({ lowerPofiles });

  const dispatch = useDispatch();
  useEffect(() => {
    if (lowerPofiles.status !== "succeeded") {
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
      <div>{node.name}</div>
      {node.children && (
        <ul>{node.children.map((child) => renderNode(child))}</ul>
      )}
    </li>
  );

  return <ul>{renderNode(data)}</ul>;
};

export default OrgChart;

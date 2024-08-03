import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLowerProfiles } from "../../store/lowerLevel";
import { lowerLevelHierarchy } from "../../utils/helper";
import "./Tree.css";

const Tree = () => {
  const lowerProfile = useSelector((state) => state.levels);
  let allLowerLevels = [];
  if (Array.isArray(lowerProfile?.data)) {
    const flattern = lowerProfile?.data.map((p) => {
      if (Array.isArray(p)) {
        return p[0];
      } else {
        return p;
      }
    });

    allLowerLevels = lowerLevelHierarchy(flattern);
  }

  //  lowerLevelHierarchy(lowerProfile.data);

  const dispatch = useDispatch();
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
      <div>{node.name}</div>
      {Array.isArray(node.children) && (
        <ul>{node.children.map((child) => renderNode(child))}</ul>
      )}
    </li>
  );

  return (
    <div className="App">
      <div className="custom-tree">
        <div class="org-chart">
          {allLowerLevels.map((rootNode) => (
            <ul>{renderNode(rootNode)}</ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tree;

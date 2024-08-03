import React from 'react';
import OrgChart from './OrgChart';
import './Tree.css';
const TreeNode  = ({ data }) => {
    
  return (
    <div className="custom-tree">
        <div className="org-chart" style={{overflow:'scroll'}}>
      {data.map((rootNode) => (
      
        <OrgChart data={rootNode} />
      ))}
    </div>
    </div>
  );
};

export default TreeNode;

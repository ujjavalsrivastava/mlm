import React from 'react';
import OrgChart from './OrgChart';
import './Tree.css';
const TreeNode  = ({ data }) => {
    
  return (
    <div className="org-chart">
      {data.map((rootNode) => (
      
        <OrgChart key={rootNode.id} data={rootNode} />
      ))}
    </div>
  );
};

export default TreeNode;

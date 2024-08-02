import React from 'react';
import OrgChart from './OrgChart';
import './Tree.css';
const TreeNode  = ({ data }) => {
    
  return (
    <div className="custom-tree">
        <div class="org-chart">
      {data.map((rootNode) => (
      
        <OrgChart key={rootNode.id} data={rootNode} />
      ))}
    </div>
    </div>
  );
};

export default TreeNode;

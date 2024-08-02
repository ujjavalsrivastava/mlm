import React, { useState } from 'react';
import './Tree.css';

const OrgChart = ({ data }) => {
  const [orgData, setOrgData] = useState(data);

  const renderNode = (node) => (
    
    <li key={node.id}>
      <div>{node.name}</div>
      {node.children && (
        <ul>
          {node.children.map((child) => renderNode(child))}
        </ul>
      )}
    </li>
  );

  return (
    <div className="custom-tree">
        <div class="org-chart">
      <ul>
        {renderNode(orgData)}
      </ul>
    </div>
    </div>
  );
};

export default OrgChart;

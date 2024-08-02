import React, { useState } from 'react';
import './Tree.css';

const OrgChart = ({ data }) => {
  const [orgData, setOrgData] = useState(data);

  const renderNode = (node) => (
    
    <li key={node.id}>
        <div class="image text-center"><img src="dist/img/img1.jpg" class="img-circle" alt="User Image" height={'50px'}/> </div>
      <div>{node.name}</div>
      {node.children && (
        <ul>
          {node.children.map((child) => renderNode(child))}
        </ul>
      )}
    </li>
  );

  return (

      <ul>
        {renderNode(orgData)}
      </ul>
    
  );
};

export default OrgChart;

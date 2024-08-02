import React from 'react';
import TreeNode from './TreeNode';

const Tree = () => {


const menuItems = [
    { id: 1, name: 'Parent 1', parentId: null },
    { id: 2, name: 'Child 1.1', parentId: 1 },
    { id: 3, name: 'Child 1.2', parentId: 1 },
    { id: 4, name: 'Parent 2', parentId: null },
    { id: 5, name: 'Child 2.1', parentId: 4 },
    { id: 6, name: 'Child 2.2', parentId: 4 },
    { id: 7, name: 'Sub-child 1.1.1', parentId: 2 },
    { id: 8, name: 'Sub-child 1.1.2', parentId: 7 },
    { id: 9, name: 'Sub-child 1.1.3', parentId: 7 }
  ];
  
  function buildHierarchy(menuItems, parentId = null) {
    const hierarchy = [];
  
    menuItems.forEach(item => {
      if (item.parentId === parentId) {
        const children = buildHierarchy(menuItems, item.id);
        if (children.length) {
          item.children = children;
        }
        hierarchy.push(item);
      }
    });
  
    return hierarchy;
  }
  
  // Usage
  const orgData = buildHierarchy(menuItems);
 

  return (
    <div className="App">
      <TreeNode data={orgData} />
    </div>
  );
};

export default Tree;

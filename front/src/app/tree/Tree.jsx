import React from 'react';
import TreeNode from './TreeNode';

const Tree = () => {


const menuItems = [
    { id: 1, name: 'Parent 1', parentId: null },
    { id: 2, name: 'Child 1.1', parentId: 1 },
    { id: 3, name: 'Child 1.2', parentId: 1 },

    { id: 4, name: 'Child 1.1 sdaasd', parentId: 1 },
    { id: 5, name: 'Child 1.2 ssda', parentId: 1 },
    { id: 6, name: 'Child 1.1 csdas', parentId: 1 },
    { id: 10, name: 'Child 1.2 asd', parentId: 1 },
    { id: 11, name: 'Child 1.1 asdada', parentId: 1 },
    { id: 12, name: 'Child 1.2 yuuytu ', parentId: 1 },

    { id: 13, name: 'Child 1.2 asd', parentId: 1 },
    { id: 14, name: 'Child 1.1 asdada', parentId: 1 },
    { id: 15, name: 'Child 1.2 yuuytu ', parentId: 1 },

    { id: 16, name: 'Child 1.2 asd', parentId: 1 },
    { id: 17, name: 'Child 1.1 asdada', parentId: 1 },
    { id: 18, name: 'Child 1.2 yuuytu ', parentId: 1 },

    { id: 19, name: 'Child 1.2 asd', parentId: 1 },
    { id: 20, name: 'Child 1.1 asdada', parentId: 1 },
    { id: 21, name: 'Child 1.2 yuuytu ', parentId: 1 },

  
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

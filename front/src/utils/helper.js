export const lowerLevelHierarchy = (data) => {
  let updatedData = [];
  if (Array.isArray(data)) {
    data.map((d) => {
      const firstObj = { ...d, parentId: null };
      delete firstObj.allLowerLevels;
      if (Array.isArray(d.allLowerLevels)) {
        updatedData = [...updatedData, firstObj].concat(d.allLowerLevels);
        console.log({ updatedData });
      } else {
        updatedData.push(firstObj);
      }
    });
  }

  function buildHierarchy(menuItems, parentId = null) {
    const hierarchy = [];
    menuItems.forEach((item) => {
      if (item.parentId === parentId) {
        const children = buildHierarchy(menuItems, item._id);
        const newItem = { ...item }; // Create a new object based on item
        if (children.length) {
          newItem.children = children;
        }
        hierarchy.push(newItem);
      }
    });

    return hierarchy;
  }
  return buildHierarchy(updatedData);
};

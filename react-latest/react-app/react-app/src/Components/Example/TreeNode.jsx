import React, { useState } from 'react';

// Sample tree data structure
const treeData = [
  {
    id: 1,
    name: "Parent 1",
    children: [
      { id: 2, name: "Child 1.1" },
      {
        id: 3,
        name: "Child 1.2",
        children: [
          { id: 4, name: "Grandchild 1.2.1" },
          { id: 5, name: "Grandchild 1.2.2" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "Parent 2",
    children: [
      { id: 7, name: "Child 2.1" },
      { id: 8, name: "Child 2.2" }
    ]
  }
];

// TreeNode component to represent each node in the tree
function TreeNode({ node }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div onClick={toggleExpand} style={{ cursor: "pointer", fontWeight: "bold" }}>
        {node.children && (isExpanded ? "- " : "+")}
        {node.name}
      </div>

      {/* If the node has children and is expanded, render them recursively */}
      {isExpanded && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((childNode) => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </div>
      )}
    </div>
  );
}

// Main component to render the tree
function ToggleableTree() {
  return (
    <div>
      <h2>Toggleable Tree Structure</h2>
      <div>
        {treeData.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
    </div>
  );
}

export default ToggleableTree;

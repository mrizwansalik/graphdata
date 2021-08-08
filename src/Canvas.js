import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const ExampleTree = ({ data }) => (<div>{data.map((node) => {
 return <Tree label={<div className="graph-node"></div>}>
    <TreeNode
      label={<div className="graph-node">{node.label}</div>}
    >
    </TreeNode>
  </Tree >})}</div>
);
export default ExampleTree;
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const ExampleTree = ({ data }) => {
  console.log("data", data);
  return data.vertices.map((ver) => {
    return (
      <Tree label={<div className="graph-node"> {ver.label}</div>}>
            {/* <TreeNode label={<div className="graph-node">Child 1</div>}> */}
            {data.edges?.map((edg) => {
                return (edg.source === ver.id) && <TreeNode label={<div className="graph-node">{edg.target || "test target"}</div>}/>
                
            })}
        {/* </TreeNode> */}
        ;
      </Tree>
    );
  });
};

export default ExampleTree;
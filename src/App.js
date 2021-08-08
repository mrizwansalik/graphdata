import "./App.css";
import React, { useState } from "react";
import Canvas from "./Canvas";

function App() {
  const [node, setNode] = useState({});
  const [source, setSource] = useState([]);
  const [target, setTarget] = useState([]);
  const [vertices, setVertices] = useState([]);
  const [edges, setEdges] = useState([]);
  const [rel, setRel] = useState({});

  const addVertices = () => {
    setVertices([...vertices, node]);
    setSource([...source, node]);
    setTarget([...target, node]);
    setNode({});
  };
  const changeEdge = (e) => {
    setRel({ ...rel, [e.target.name]: e.target.value });
  }
  const changeDropdown = () => {
    
  }
  const addEdge = () => {
    setEdges([...edges, rel]);
    setRel({})
  }
  const handleChange = (e) => {
    setNode({ ...node, [e.target.name]: e.target.value })
  };
  console.log(' vertices', vertices, edges)
  return (
    <div className="App container">
      <h1 className="text-center">Thor Task</h1>
      <div className="row">
        <div className="col-md-12">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={node.id || ""}
            className="form-control col-md-8"
            onChange={handleChange}
          />
          <label>Label</label>
          <input
            type="text"
            name="label"
            value={node.label || ""}
            className="form-control col-md-8"
            onChange={handleChange}
          />
          <label>type</label>
          <input
            type="text"
            value={node.type || ""}
            name="type"
            className="form-control col-md-8"
            onChange={handleChange}
          />{" "}
          <br />
          <button
            className="btn btn-success float-end mr-2"
            onClick={addVertices}
          >
            Submit
          </button>
        </div>
        <div className="col-md-12">
          <label>ID</label>
          <input
            type="text"
            name="id"
            value={rel.id || ""}
            className="form-control col-md-8"
            onChange={changeEdge}
          />
          <label>Label</label>
          <input
            type="text"
            name="label"
            value={rel.label || ""}
            className="form-control col-md-8"
            onChange={changeEdge}
          />
          <label>type</label>
          <input
            type="text"
            value={rel.type || ""}
            name="type"
            className="form-control col-md-8"
            onChange={changeEdge}
          />
          <label>Source</label>
          <select
            className="form-select"
            name="source"
            aria-label="Default select example"
            onChange={changeEdge}
          >
            {source.map((n) => {
              return (
                <option name="source">
                  {n.id}
                </option>
              );
            })}
          </select>
          <label>Target</label>
          <select
            className="form-select"
            name="target"
            aria-label="Default select example"
            onChange={changeEdge}
          >
            {target.map((n) => {
              return (
                <option name="target">
                  {n.id}
                </option>
              );
            })}
          </select>
          <br />
          <button className="btn btn-success float-end mr-2" onClick={addEdge}>
            Submit
          </button>
        </div>
        <div className="col-md-12s">
          <Canvas data={vertices} />
        </div>
      </div>
    </div>
  );
}

export default App;

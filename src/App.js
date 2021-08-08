import logo from './logo.svg';
import './App.css';
import GraphView from './GraphView';
import React, {useState} from 'react'

function App() {
  const [data, setData] = useState({
    vertices: [
      {
        id: "n1",
        label: "Node 1",
        type: "node",
      },
      {
        id: "n2",
        label: "Node 2",
        type: "node",
      },
      {
        id: "a1",
        label: "Alarm 1",
        type: "alarm",
      },
    ],
    edges: [
      {
        id: "e1",
        label: "edge n1-n2",
        type: "link",
        source_id: "n1",
        target_id: "n2",
      },
      {
        id: "e2",
        label: "edge n2-a1",
        type: "link",
        source_id: "n2",
        target_id: "a1",
      },
    ],
  });

  const handleSubmit = (data) => {
    console.log(data)
  }

  const handleChange = (e) => {
    e.preventDefualt();
    const data = [e.target.name] === e.target.value
    console.log(data)
  }
  return (
    <div className="App container">
      <h1 className="text-center">Thor Task</h1>
      <div className="row">
        <div className="col-md-6">
          <form className="form-group" onSubmit={()=>handleSubmit(data)} >
          <label>Label</label>
          <input type="text" name="label" className="form-control col-md-8" onChange={(e)=>handleChange(e)} />
          <label>type</label>
            <input type="text" name="type" className="form-control col-md-8" onChange={(e) => handleChange(e)} /> <br />
          <button className="btn btn-success float-end mr-2">Submit</button>
        </form></div>
        <div className="col-md-6">
         <GraphView data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;

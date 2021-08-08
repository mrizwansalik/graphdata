import React from 'react'

export default function GraphView({data}) {
    return (
      <div>
        
          {Object.keys(data).map((key) => {
            return  data[key].map((val) => {return <ul>
                <li>{val.id}</li>
                <li>{val.label}</li>
                <li>{val.type}</li>
                {val.source_id &&<li>{val.source_id}</li>}
                {val.target_id &&<li>{val.target_id}</li>}
              </ul>;});
          })}
        
        {console.log(data)}
      </div>
    );
}

import React from 'react';
import { Button } from 'reactstrap';

const DataComponent = ({ data, loading, totalPosts }) => {
  

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (totalPosts === 0 ){
    return (
      <div className="container_item">
        <div >
                <div className="component_wrapper">
                <div className="component_header">
                    <h3 className="id">NA</h3><h3>Course Unavailable</h3>
                </div>
                <div>
                    <h5>Please enter valid credential in input text box</h5>
                </div>
                </div>
  
        </div>
      </div>
    );
  }

  return (
    <div className="container_item">
      <div >
          {data.map(datum => (
              <div className="component_wrapper">
              <div className="component_header">
                  <h3 className="id">{datum["Course Id"]}</h3><h3>{datum["Course Name"]}</h3><span>{datum.Provider||"NA"}</span>
              </div>
              <div>
                  <h5>{ datum["Universities/Institutions"] }</h5>
                  <p>Length(in hours) : { datum["Length"] || "NA"}</p>
                  <p>Subject: { datum["Parent Subject"] }</p>
                  <p>Next Session: { datum["Next Session Date"] }</p>
                  <p>Child Subject: { datum["Child Subject"] }</p>
                  <Button className="button" type="button" href={datum["Video(Url)"]} variant="primary" className={datum["Video(Url)"]?"something":null}>
                      {datum["Video(Url)"]?"Watch Video":"Video Unavailable"}
                  </Button>
                  <Button className="button" type="button" href={datum.Url} variant="primary" size="lg">
                      Apply
                  </Button>
                  
              </div>
              </div>

          ))}
      </div>
    </div>
  );
};

export default DataComponent;

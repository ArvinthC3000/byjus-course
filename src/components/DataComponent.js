import React from 'react';
import { Button } from 'reactstrap';

const DataComponent = ({ data, loading }) => {
    console.log(data)
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
        {data.map(datum => (
            <div>
            <div>
                <h3>{datum["Course Id"]}-{datum["Course Name"]}</h3><span>{datum.Provider}</span>
            </div>
            <div>
                <h5>{ datum["Universities/Institutions"] }</h5>
                <p>Subject: { datum["Parent Subject"] }</p>
                <p>Child Subject: { datum["Child Subject"] }</p>
                <Button href={datum.Url} variant="primary" size="lg" disabled>
                    Link
                </Button>
            </div>
            </div>

        ))}
    </div>
  );
};

export default DataComponent;

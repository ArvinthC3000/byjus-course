import React from 'react'

export default function DataComponent(props) {
    console.log(props)
    return (
        <div className="dataComp__child">
            {props.data}
        </div>
    )
}

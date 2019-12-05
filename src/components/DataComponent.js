import React from 'react'

export default function DataComponent(props) {
    console.log(props)
    return (
        <div>
            <p>{props.key}Data</p>
        </div>
    )
}

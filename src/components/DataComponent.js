import React from 'react'

export default function DataComponent(props) {
    console.log(props)
    return (
        <div>
            {props.coursesButton && <p>{props.data["Course Name"]}</p>}
            {props.providerButton && <p>{props.dat}</p>}
            {props.subjectButton && <p>{props.data["Parent Subject"]}</p>}
            {props.instituteButton && <p>{props.data["Universities/Institutions"]}</p>}
        </div>
    )
}

import React from 'react'
import "./ProjectDetails.css"
import { useLocation } from 'react-router-dom'


const ProjectDetails = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div id='ProjectDetails'>
        <div id='leftPart'>
        <h1 className='projectName'>{data.name}</h1>
        <p>{data.description}</p>
        </div>
        <div className='rightPart'>
            <img style={{maxWidth: "35vw"}} src={data.image} alt="" />
        </div>
    </div>
  )
}

export default ProjectDetails
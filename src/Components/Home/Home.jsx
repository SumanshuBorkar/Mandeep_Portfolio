import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from "../images/blank 2.png"
import image2 from "../images/blank 3.png"
import image3 from "../images/blank.png"
import image4 from "../images/experiences.png"
import image5 from "../images/resources.png"
import image6 from "../images/PPF.png"
import image7 from "../images/studio.png"
import image8 from "../images/Vector.png"
import "./Home.css"

const Home = () => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/projectDetails')
    }
  return (
    <div className="projectsContainer">
    
        <div className='projectsACTUAL'>
           <div className='cards'>
            <img className='imageCard' src={image5} alt='no' />
            <p className='projectText'>Resource</p>
           </div>
           <div className='cards'>
            <img className='imageCard' src={image8} alt='no' />
            <p className='projectText2'>influence</p>
           </div>
           <div className='cards'>
            <img className='imageCard' src={image1} alt='no' />
           </div>
           <div className='cards'>
            <img className='imageCard' src={image2} alt='no' />
           </div>
           <div className='cards'>
            <img className='imageCard' src={image7} alt='no' />
            <p className='projectText'>Studio</p>
           </div>
           <div className='cards'>
            <img className='imageCard' src={image3} alt='no' />
           </div>
           <div className='cards'>
            <img className='imageCard' src={image4} alt='no' />
            <p className='projectText3'>Experiences</p>
           </div>
           <div className='cards'>
            <img className='imageCard' src={image6} alt='no' />
            <p className='projectText4'>Past, Present and Future</p>
           </div>
        </div>
    </div>
  )
}

export default Home
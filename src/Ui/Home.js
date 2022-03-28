import React from 'react'
import "./Home.css"  
 import {useNavigate} from "react-router-dom"
function Home() {
   const navigate=useNavigate();
   
  return (
    <div className='main'>
    <div className='container1'>
     <img src='Note1.jpg' alt='logo' className='img1'></img>       
     
    <h6 className='lbl'>Do good and good will come to you.</h6>

    <div>
    <button className='button1' onClick={()=>navigate("/Add/id")}>Start Your First Note </button>
    </div>

    </div>
    </div>
  )
}

export default Home
import React from 'react'
import {
    // FaSun,
    // FaMoon,
   
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa"
  

const HeaderNav = () => {
    const getStyle ={
        color: "gray",
    }
  return (
    <div>   
     <div className="flex fixed left-0 top-0 w-full z-10 gap-3 m-3"> 
    <a href="https://github.com/Simer0996" className="text-2xl text-gray hoverLink"><FaGithub style={getStyle}/></a>
    <a href="https://www.linkedin.com/in/simerjit-singh/" className="text-2xl text-gray hoverLink"><FaLinkedin style={getStyle}/></a>
    <a href="#contact"><button className="buttonStyling1">Let's Contact</button></a>
 
 </div></div>
  )
}

export default HeaderNav
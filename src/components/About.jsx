import React,{useState,useEffect} from 'react'
import myImage from "../assets/simerPhoto.jpg"
const About = () => {
  const [boxShadow, setBoxShadow] = useState("")
  const [color,setColor] = useState("grey")

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
    if(window.scrollY>700) {
      setBoxShadow("0 0 10px #ff9760, 0 0 20px #ff9760, 0 0 40px #ff9760")
      setColor("#fff")
    } else {
      setBoxShadow("")
      setColor("grey")
    }
    })
  },[])

  return (
    <div>
        <img src={myImage} alt="itsMe" className="w-[180px] border-solid border-[5px] rounded-full " style={{
          borderColor: `${color}`,
          boxShadow:`${boxShadow}` 
          
        }}/>
    </div>
  )
}

export default About
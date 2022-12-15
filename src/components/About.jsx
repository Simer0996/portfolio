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
    
    <div className="flex items-center gap-[50px] justify-center flex-wrap mb-[100px]">
        <img src={myImage} alt="itsMe" className="w-[180px] border-solid border-[5px] rounded-full " style={{
          borderColor: `${color}`,
          boxShadow:`${boxShadow}` 
        }}/>
        <div style={{color:`${color}`}} className="w-[70%]"><p>Full Stack developer with 2+ years of hands-on experience designing, developing, and implemeting applications and solutions using various range of technologies and programming languages. Seeking a leverage broad development experience and hands-on technical expertise in a challening role as Full-stack Developer. </p>
          <button style={{  backgroundColor: "black",
          color: `${color}`,
          border: `1px solid ${color}`,
          padding: "4px 8px",
          borderRadius: "2px"}} className="block m-auto lg:inline lg:mt-[15px] mt-[20px] buttonStyling text-xl ">Resume</button>
          </div>
        </div>

  
    
  )
}

export default About
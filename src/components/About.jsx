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
    
    <div className="flex items-center gap-[50px] ml-[150px] flex-wrap">
        <img src={myImage} alt="itsMe" className="w-[180px] border-solid border-[5px] rounded-full " style={{
          borderColor: `${color}`,
          boxShadow:`${boxShadow}` 
        }}/>
        <div style={{color:`${color}`}} className="w-[70%]"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <button style={{  backgroundColor: "black",
  color: `${color}`,
  border: `1px solid ${color}`,
  padding: "4px 8px",
  borderRadius: "2px"}} className="block buttonStyling text-xl mt-[15px]">Resume</button>
</p></div>
    </div>
    
  )
}

export default About
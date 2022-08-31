import React, { useState, useEffect } from "react"
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [FontColor, setFontColor] = useState("")


  useEffect(()=>{
    window.addEventListener('scroll',()=>{
    if(window.scrollY>720) {
      setFontColor("#fff")
    } else {
      setFontColor("grey")
    }
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("api/v1/contactMe", { name, phone, email })
    alert(
      "Thanks for submitting your contact.I will try to get back at you ASAP!"
    )
  }
  return (
    <div className= "block w-[30%] h-[400px] m-auto" >
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <label className="text-[grey] text-2xl" style={{color:`${FontColor}`}}>
          Name
          <input
            type="string"
            onChange={(e) => setName(e.target.value)}
            className="w-[100%]"
            style={{color:`${FontColor}`,borderBottom: `2px solid ${FontColor}`}}
          />
        </label>
        <label className="text-[grey] text-2xl" style={{color:`${FontColor}`}}>
          Phone
          <input
            type="string"
            onChange={(e) => setPhone(e.target.value)}
            className="w-[100%]"
            style={{color:`${FontColor}`,borderBottom: `2px solid ${FontColor}`}}
          />
        </label>
        <label className="text-[grey] text-2xl" style={{color:`${FontColor}`}}>
          Email
          <input
            type="string"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%]"
            style={{color:`${FontColor}`, borderBottom: `2px solid ${FontColor}`}}
          />
        </label>
        <button className="block m-auto buttonStyling text-xl mt-[10px]" style={{
  backgroundColor: "black",
  color: `${FontColor}`,
  border: `1px solid ${FontColor}`,
  padding: "5px 10px",
  borderRadius: "2px",
}}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact

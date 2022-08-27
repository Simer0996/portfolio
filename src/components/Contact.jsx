import React, { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("api/v1/contactMe", { name, phone, email })
    alert(
      "Thanks for submitting your contact.I will try to get back at you ASAP!"
    )
  }
  return (
    <div className="text-white block w-[30%] h-[400px] m-auto">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <label className="text-[#454545]  ">
          Name
          <input
            type="string"
            onChange={(e) => setName(e.target.value)}
            className="w-[100%] text-[#ff9760]"
          />
        </label>
        <label className="text-[#454545]">
          Phone
          <input
            type="string"
            onChange={(e) => setPhone(e.target.value)}
            className="w-[100%] text-[#ff9760]"
          />
        </label>
        <label className="text-[#454545] ">
          Email
          <input
            type="string"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] text-[#ff9760]"
          />
        </label>
        <button className="block m-auto buttonStyling text-xl mt-[10px]">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact

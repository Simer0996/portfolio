import React, { useState, useEffect, useRef } from "react"

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [FontColor, setFontColor] = useState("")

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 720) {
        setFontColor("#fff")
      } else {
        setFontColor("grey")
      }
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_15jye7t', 'template_zurs2gs', form.current, 'E68Hjl1hVkx1g0Oc-')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <div className="w-[65%] m-auto block" id="contact">
      <div style={{ display: "flex", justifyContent: "space-between" }} >

        <form ref={form} onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-[100%] lg:w-[60%] lg:none">
          <p className="text-2xl lg:text-5xl text-white heading-styling">Get In Touch</p>
          <label className="text-[grey] text-2xl mt-[30px]" style={{ color: `${FontColor}` }}>
            Email
            <input
              type="string"
              // onChange={(e) => setName(e.target.value)}
              name="from_Email"
              className="w-[100%]"
              style={{ color: `${FontColor}`, borderBottom: `2px solid ${FontColor}` }}
            />
          </label>
          <label className="text-[grey] text-2xl" style={{ color: `${FontColor}` }}>
            Phone
            <input
              type="string"
              // onChange={(e) => setPhone(e.target.value)}
              name="from_phone"
              className="w-[100%]"
              style={{ color: `${FontColor}`, borderBottom: `2px solid ${FontColor}` }}
            />
          </label>
          <label className="text-[grey] text-2xl" style={{ color: `${FontColor}` }}>
            Message
            <input
              type="string"
              // onChange={(e) => setEmail(e.target.value)}
              name="from_message"
              className="w-[100%]"
              style={{ color: `${FontColor}`, borderBottom: `2px solid ${FontColor}` }}
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
        <img src="/contact/bulb.svg" alt="bulb" style={{ width: "300px" }} />
      </div>
    </div>
  )
}

export default Contact

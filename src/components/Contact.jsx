import React, { useState, useEffect, useRef } from "react"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  from_Email: yup.string().email().required("Field cannot not be empty"),
  from_phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  from_message: yup.string(),

});

const Contact = () => {
  const form = useRef();
  const [FontColor, setFontColor] = useState("")
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 720) {
        setFontColor("#fff")
      } else {
        setFontColor("grey")
      }
    })
  }, [])

  const submitForm = () => {
    if (errors) {
      console.log(errors)
    } else {
      emailjs.sendForm('service_15jye7t', 'template_zurs2gs', form.current, 'E68Hjl1hVkx1g0Oc-')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  }
  return (
    <div className="w-[75%] m-auto block" id="contact">
      <div style={{ display: "flex", justifyContent: "space-between" }} >

        <form ref={form} onSubmit={handleSubmit(submitForm)} className="flex flex-col w-[100%] lg:w-[60%] lg:none">
          <p className="text-2xl lg:text-5xl text-white heading-styling">Get In Touch</p>
          <label className="text-[grey] text-3xl mt-[30px]" style={{ color: `${FontColor}` }}>
            Email
            <input {...register('from_Email', { required: true })}
              type="string"
              className="w-[100%]"
              style={{ color: `${FontColor}`, borderBottom: `2px solid ${FontColor}` }}
            />
            <ErrorMessage
              errors={errors}
              name="from_Email"
              render={({ message }) => <p className="text-white error-styling text-xl">{message}</p>}
            />

          </label>
          <label className="text-[grey] text-3xl" style={{ color: `${FontColor}` }}>
            Phone
            <input {...register('from_phone', { required: true })}
              type="string"
              className="w-[100%]"
              style={{ color: `${FontColor}`, borderBottom: `2px solid ${FontColor}` }}
            />
            <ErrorMessage
              errors={errors}
              name="from_phone"
              render={({ message }) => <p className="text-white error-styling text-xl">{message}</p>}
            />

          </label>
          <label className="text-[grey] text-3xl" style={{ color: `${FontColor}` }}>
            Message
            <input {...register('from_message', { required: true })}
              type="string"
              className="w-[100%]"
              style={{ color: `${FontColor}`, borderBottom: `2px solid ${FontColor}` }}
            />
            <ErrorMessage
              errors={errors}
              name="from_message"
              render={({ message }) => <p className="text-white error-styling">{message}</p>}
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
        <img src="/contact/bulb.png" alt="bulb" className="hidden lg:block lg:w-[400px] lg:h-[450px] " />
      </div>
    </div>
  )
}

export default Contact

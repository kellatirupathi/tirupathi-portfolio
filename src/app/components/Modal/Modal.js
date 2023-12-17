"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./modal.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ closeModalprob }) => {

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 500,
    });
  });


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "service_0fnu1yt",
        "service_xv1fm7b",
        "template_249cxg2",
        form.current,
        "fFVfMurPvOKJn_ohN"
      )
      .then(
        (result) => {
          toast.success('massage sent!',
          {
            autoClose:5000,
            theme: "colored",
          })
          // Clear input fields after successful send
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(()=>{
            closeModalprob()
          },450)
        },
        (error) => {
          toast.error('Sorry! message not sent', {
            position: "top-right",
            autoClose: 5000,
            theme: "colored",
            });
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* to set the backgound blur */}
      <div className="modalWrapper"></div>
      <div className="modalContainerWrapper" data-aos="zoom-in">
        <div className="modalContainer ">
          <h4 className="modalHeading">Let's Work Together! Drop a Message</h4>
          <div className="modalFormWrapper">
            <form ref={form} onSubmit={sendEmail} className="modalFormChilds">
              <label htmlFor="Name" className="modalformLabel">Name <span style={{color:'red'}}>*</span></label>
              <input
              id="Name"
                className="modalformInput"
                type="text"
                name="user_name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <label htmlFor="Email" className="modalformLabel">Email <span style={{color:'red'}}>*</span></label>
              <input
              id="Email"
                className="modalformInput"
                type="email"
                name="user_email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <label htmlFor="Message" className="modalformLabel">Message <span style={{color:'red'}}>*</span></label>
              <textarea
              id="Message"
                className="modalformInput"
                name="message"
                placeholder="Type your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />
              <div className="btnWrapper">
                <button className="modalBtn red" onClick={closeModalprob}>close</button>
              <input className="modalBtn " type="submit" value="Send" />
              <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

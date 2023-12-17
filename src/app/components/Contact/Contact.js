"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Image from "next/image";
import contactImage from "../../assets/images/contact.png";
// toster imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
          console.log("message sent");
          // Clear input fields after successful send
          toast.success('massage sent!',
          {
            autoClose:5000,
            theme: "colored",
          })
          setName("");
          setEmail("");
          setMessage("");
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
    <div id="contact">
      <h4 className="contactTitle">Contact Me!</h4>
      <section className="contactWrapper">
        <div className="contactLeftSection">
          <div className="contactImageWrap">
            <Image
              src={contactImage}
              alt="contactMe"
              style={{ width: "100%", height: "100%" }}
            ></Image>
          </div>
        </div>
        <div className="contactRightSection">
          <div className="formMessage">
            Feel free to get in touch with me using the contact form below. I
            welcome any inquiries, feedback, or collaboration opportunities. I
            will make it a priority to respond to you promptly.
          </div>
          <div className="formWrapper">
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              {/* <label className="formLabel">Name</label><br/> */}
              <input  className="formInput"
                type="text"
                name="user_name"
                placeholder="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* <label className="formLabel">Email</label><br/> */}
              <input className="formInput"
                type="email"
                name="user_email"
                placeholder="Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* <label className="formLabel">Message</label><br/> */}
              <textarea className="formInput"
                name="message"
                placeholder="Type your message *"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <input className="sendBtn" type="submit" value="Send" />
              <ToastContainer />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

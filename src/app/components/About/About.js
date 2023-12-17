"use client";
import "./about.css";
import Image from "next/image";
import myAboutImage from "../../assets/images/kella.jpg";
// used for typing animation
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about">
      <svg
        className="aboutWave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#def2f1"
          fill-opacity="1"
          d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,213.3C672,213,768,171,864,144C960,117,1056,107,1152,96C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <h3 className="aboutTitle">About Me!</h3>
      <div className="aboutSectionWrapper">
        <section className="aboutLeftSec">
          <div className="aboutLeftSecWrapper">
            <h1 className="myName">
              Hey<span style={{ color: "#2b7a78" }}>!</span>
            </h1>
            <span className="myName" style={{display:"flex", alignItems:'center'}}>
              I'm
              <span style={{marginLeft:'1.5rem'}} >
                <Typewriter 
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Tirupathi Rao Kella")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('Tirupathi Rao Kella,')
                      .start();
                  }}
               />
              </span>
            </span>
            <p className="about-para">
              <span style={{ fontSize: "1.8rem" }}>A</span> Front-End developer
              based in Ap, India. I'm an undergraduate student from Raghu Engineering College, Visakhapatnam, and my journey in web development began during my final year
              of college. I'm passionate about creating beautiful, functional,
              and user-friendly websites.
            </p>
            <p className="about-para">
              I love the process of turning design concepts into fully
              functional and visually appealing websites, ensuring seamless user
              experiences.
            </p>

            <p className="about-para displayMob">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users. I am excited to embark on this
              journey, collaborate with fellow developers, and make a meaningful
              impact through my work. Let's build something incredible together!
            </p>
          </div>
        </section>
        <section className="aboutRightSec">
          <div className="aboutRightSecWrapper">
            <Image alt = 'Nagaraj Yallurkar Image' className="aboutImage" src={myAboutImage}/>
          </div>
        </section>
      </div>
      <div className="aboutContent displayDesk">
        <p className="about-para">
          I believe that design is about more than just making things look
          pretty – it's about solving problems and creating intuitive, enjoyable
          experiences for users. I am excited to embark on this journey,
          collaborate with fellow developers, and make a meaningful impact
          through my work. Let's build something incredible together!{" "}
          <a style={{ fontSize: "1.3rem", TextDecoder: "none" }} href="">
            Hire Me!
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;

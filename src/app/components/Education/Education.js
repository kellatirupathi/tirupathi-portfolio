"use client"
import "./education.css";
import {FaUserGraduate} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Education = () => {
// adding animation 
  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 400
    });
  }, [])

  return (
    <div id="Education">
      <div className="educationTitle">Education</div>
      <div className="educationWrapper">
        <div className="education1" >
          <div className="educationFlex" data-aos="fade-right">
            <div>
              <h2>Full-Stack Web Development <span style={{fontSize:'1.7rem'}}>(MERN)</span> course</h2>
              <h4 className="edCollage">
                May 2023 - Nov 2023 | Edyoda Digital University
              </h4>
              <p className="edcDesc">
                gaining expertise in building websites using MongoDB,
                Express.js, React.js, and Node.js, enabling full-stack
                JavaScript development for efficient and dynamic web solutions.
              </p>
            </div>
          </div>
          <div className="absoluteItem absPosition1">
            <FaUserGraduate className='abs-icon' />
          </div>
        </div>
        <div className="education2" >
          <div className="educationFlex left" data-aos="fade-left" >
            <div>
              <h2>Bachelor of Engineering In Electrical and Electronics</h2>
              <h4 className="edCollage">2020-2023 | Raghu Engineering college, Visakhapatnam </h4>
              <p className="edcDesc">
                A stream that deals with Electrical systems and Electronics
                technologies for information transmission and processing.
              </p>
            </div>
          </div>
          <div className="absoluteItem absPosition2">
            <FaUserGraduate className='abs-icon' />
          </div>
        </div>
        <div className="education3" >
        <div className="educationFlex" data-aos="fade-right">
          <div>
          <h2>Diploma</h2>
          <h4 className="edCollage">2017-2020 | Sri Jyothi Polytechnic College, Kalavapamula</h4>
          </div>
        </div>
        <div className="absoluteItem absPosition3">
            <FaUserGraduate className='abs-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

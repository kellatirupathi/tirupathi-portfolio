import { useState } from "react";
import myImage from "../../assets/images/img2.png";
import "./landingPage.css";
import Image from "next/image";
import { AiOutlineFilePdf } from "react-icons/ai";
import Modal from "../Modal/Modal";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false); // mentain the value of modal display/none

  const closeModal = () => setShowModal(false); // passing as prob to close the modal

  return (
    <>
      {/* modal section--------------- */}
      {showModal && <Modal closeModalprob={closeModal} />}
      {/*  passing method as prob to perent to close the modal */}

      <div id="home" className="landingPageWrapper">
        <section className="leftSection">
          <Image
            priority={true}
            className="landingPageImage"
            src={myImage}
            alt="My Image"
          />
        </section>
        <section className="rightSection">
          <div className="titleWrapper">
            <h1 className="landingTitle">
              Turning Vision Into Reality With Code And Design.
            </h1>
          </div>
          <p className="landingContent">
            As a skilled{" "}
            <span style={{ fontSize: "18px", color: "red" }}>F</span>
            ront-<span style={{ fontSize: "18px", color: "red" }}>E</span>nd
            developer, I am dedicated to turning ideas into innovative web
            applications. Explore my latest projects showcasing my expertise in
            React.js and web development.
          </p>
          <div className="landingPageBtnWrapper">
            <a
              className="resumeBtn"
              href="https://drive.google.com/file/d/1quEXh93hLovMLX9ufcP57wTYF1eLlyUB/view?usp=sharing"
              target="_blank"
            >
              Resume <AiOutlineFilePdf />
            </a>
            <button
              onClick={() => setShowModal(true)}
              style={{ marginLeft: "1.2rem", textAlign: "center" }}
              className="resumeBtn"
            >
              Hire Me
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

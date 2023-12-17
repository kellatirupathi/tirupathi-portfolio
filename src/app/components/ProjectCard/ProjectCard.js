"use client";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { useState } from "react";
import Image from "next/image";
import "../Projects/projects.css";

const ProjectCard = (probs) => {
  const { project } = probs;
  const [showLinks, setShowLinks] = useState(false);
  console.log(project);
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 500,
    });
  });

  return (
    <article className="projectCard">
      <div
        onMouseEnter={() => setShowLinks(true)}
        onMouseLeave={() => setShowLinks(false)}
        className="projectImageWrapper"
        data-aos="zoom-in"
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          className="ProImage"
          src={project.image}
          alt={project.name}
        />
        <div
          className={
            showLinks
              ? "linkWrapper linkDisplay linkWrapper2 linkDisplay1"
              : "linkWrapper linkDisplay"
          }
        >
          <a
            className={
              showLinks
                ? " projectLink displayNone projecLink1 displayNone1"
                : "projectLink displayNone"
            }
            href={project.github}
            target="_blank"
            style={
              showLinks
                ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
                : { display: "none" }
            }
          >
            <AiFillGithub />
          </a>
          <a
            className={
              showLinks
                ? "projectLink displayNone projecLink1 displayNone1"
                : "projectLink displayNone"
            }
            href={project.host}
            target="_blank"
            style={
              showLinks
                ? {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }
                : { display: "none" }
            }
          >
            <FiExternalLink />
          </a>
        </div>
      </div>
      <div className="proContent">
        <h1 className="projectName">{project.name}</h1>
        <p className="projectDisc">{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;

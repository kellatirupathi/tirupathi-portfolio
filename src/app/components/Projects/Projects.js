"use client";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./projects.css";
import projectData from "../../projectData";

const Projects = () => {
  console.log(projectData)
  return (
    <div id="projects">
      <h4 className="projcetTitle"> Projects </h4>
      <section className="projectsWrapper">
        {projectData.map((Data, index) => (
          <ProjectCard project={Data} key={'pro-'+index} />
        ))}
      </section>
    </div>
  );
};

export default Projects;

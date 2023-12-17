import html from "../../assets/images/HTML_logo.png";
import css from "../../assets/images/CSS_logo.png";
import js from "../../assets/images/javascript_logo.png";
import jquery from "../../assets/images/jQuery_logo.png";
import react from "../../assets/images/react_logo.png";
import boot from "../../assets/images/bootstrap_logo.png";
import mysql from "../../assets/images/mysql-logo.png";
import mongodb from "../../assets/images/mongodb_logo.png";
import java from "../../assets/images/java_logo.png";
import Image from "next/image";
import "./skills.css";

const Skills = () => {
  return (
    <div id="Skills">
      <h2 className="skillsTitle">Skills</h2>
      <div className="skillsWrapper">
        <div className="allSkills">
          <div className="skillsimgwrapper htmlBg">
            <Image alt="HTML"  src={html} className="skillLogo" />
          </div>
          <h4 className="skillName">HTML5</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper cssBg">
            <Image alt="CSS" src={css} className="skillLogo" />
          </div>
          <h4 className="skillName">CSS3</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper jsBg">
            <Image alt="JS" src={js} className="skillLogo" />
          </div>
          <h4 className="skillName">JavaScript</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper jqBg">
            <Image alt="JQUERY" src={jquery} className="skillLogo" />
          </div>
          <h4 className="skillName">jQuery</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper reactBg">
            <Image alt="REACT" src={react} className="skillLogo" />
          </div>
          <h4 className="skillName">React js</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper bootBg">
            <Image alt="BOOTSRTAP" src={boot} className="skillLogo" />
          </div>
          <h4 className="skillName">BootStrap</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper mysqlBg">
            <Image alt="MYSQL" src={mysql} className="skillLogo" />
          </div>
          <h4 className="skillName">MySQL</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper mongoBg">
            <Image alt="MONGODB" src={mongodb} className="skillLogo" />
          </div>
          <h4 className="skillName">MongoDB</h4>
        </div>
        <div className="allSkills">
          <div className="skillsimgwrapper javaBg">
            <Image alt="JAVA" src={java} className="skillLogo" />
          </div>
          <h4 className="skillName">Java</h4>
        </div>
        {/* <div className="allSkills">
                <Image alt="NODE" 
                src={node}
                className='skillLogo'
                />
                <h4 className='skillName'>Node JS</h4>
            </div> */}
      </div>
    </div>
  );
};

export default Skills;

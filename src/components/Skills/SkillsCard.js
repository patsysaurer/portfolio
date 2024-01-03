import React from "react";
import designImg from "./../../assets/icons/design.svg";
import webImg from "./../../assets/icons/web.svg";
import appImg from "./../../assets/icons/app.svg";
import "./skills.css";

const SkillsCard = () => {
  return (
    <>
      <div className="skills-group">
        <div className="skills-card">
          <img src={designImg} />
          <h4>Design</h4>
          <p>Adobe Suite & Figma</p>
        </div>
        <div className="skills-card">
          <img src={webImg} />
          <h4>Web</h4>
          <p>VS Code, React, Ruby</p>
        </div>
        <div className="skills-card">
          <img src={appImg} />
          <h4>Apps</h4>
          <p>React, Rails, Kotlin</p>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;

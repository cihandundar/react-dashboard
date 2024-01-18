import React from "react";
import project1 from "../../assets/project1.webp";
import project2 from "../../assets/project2.webp";
import project3 from "../../assets/project3.webp";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__container__title">
          <h2>Projects</h2>
          <span className="textSoft">Architects design houses</span>
        </div>
        <div className="projects__container__wrapper">
          <div className="projects__box">
            <div className="projects__box__img">
              <img src={project1} alt="" />
            </div>
            <div className="projects__box__text">
              <span className="textSoft">Project#1</span>
              <h4>Modern</h4>
              <span className="textSoft">
                As Uber works through a huge amount of internal management
                turmoil.
              </span>
            </div>
            <div className="projects__box__btn">
              <button>VIEW ALL</button>
            </div>
          </div>
          <div className="projects__box">
            <div className="projects__box__img">
              <img src={project2} alt="" />
            </div>
            <div className="projects__box__text">
              <span className="textSoft">Project#2</span>
              <h4>Scandinavian</h4>
              <span className="textSoft">
                As Uber works through a huge amount of internal management
                turmoil.
              </span>
            </div>
            <div className="projects__box__btn">
              <button>VIEW ALL</button>
            </div>
          </div>
          <div className="projects__box">
            <div className="projects__box__img">
              <img src={project3} alt="" />
            </div>
            <div className="projects__box__text">
              <span className="textSoft">Project#3</span>
              <h4 s>Minimalist</h4>
              <span className="textSoft">
                As Uber works through a huge amount of internal management
                turmoil.
              </span>
            </div>
            <div className="projects__box__btn">
              <button>VIEW ALL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

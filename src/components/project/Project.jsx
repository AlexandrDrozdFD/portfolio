import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import WOW from 'wowjs';
import './project.scss';
import 'animate.css';

const Project = ({ img, link, title, desc, git }) => {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <div className="project-item wow animate__animated animate__fadeInLeftBig">
      <div className="project-item__desc">
        <h2>{title}</h2>
        <p className="desc-text">{desc}</p>
        <a href={git} target="_blank" className="github-link">
          <div className="github-link__text">
            Source 
          </div>
          <div className="github-link__icon">
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="project">
        <div className="project__browser">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <a href={link} className="project__link" target="_blank" rel="noreferrer">
          <img className="project-screenshot" src={img} alt="project screenshot" />
        </a>
      </div>
    </div>
  );
}

export default Project;
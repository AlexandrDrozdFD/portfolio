import './project.scss';

const Project = (props) => {
  const { img, link } = props;

  return (
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
  );
}

export default Project;
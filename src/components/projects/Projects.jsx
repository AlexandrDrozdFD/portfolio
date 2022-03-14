import './projects.scss';
import Project from '../project/Project';
import { projects } from '../../data';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__caption">
        <h2 className="projects-title">My projects</h2>
      </div>
      <div className="projects__items">
        {projects.map((el) => {
          return <Project key={el.id}
            img={el.img}
            link={el.link}
            title={el.title}
            desc={el.desc}
            git={el.git}
          />
        })}
      </div>
    </section>
  );
}

export default Projects;
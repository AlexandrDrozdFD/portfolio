import './projects.scss';
import Project from '../project/Project';

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__caption">
        <h2 className="projects-title">My projects</h2>
        <p className="projects-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Optio minus tenetur atque eligendi aliquam ipsa repellendus, 
          asperiores ut, error vero a temporibus? Ipsa enim, nisi incidunt 
          praesentium culpa ullam. Sequi?
        </p>
      </div>
      <div className="projects__items">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
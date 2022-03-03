import './about.scss';
import face from '../../img/face.jpg';
import cv from './assets/cv_Drozd.pdf';

const About = () => {
  return (
    <section className="about" id='about'>
      <h1 className="title">
        About me
      </h1>
      <div className="about-content">
        <div className="about-content__left">
          <div className="card">
            <img src={face} alt="Alexander" className="card__img" />
          </div>
        </div>
        <div className="about-content__right">
          <p className="about-desc">
            I Code and Develop website and web apps.
          </p>
          <p className="about-desc">
            Skilled in HTML5, CSS3, Javascript, React.js, Drupal, Bootstrap.
          </p>
          <p className="about-desc">
            Progress in actual front-end technologies, learning new frameworks and acquisition of
            experience, learning back-end, improving my foreign language skills
          </p>
          <p className="about-desc">
            Believe in constant learning that enhances my coding skills more and more.
          </p>
          <div className="divider"></div>

          <div className="btns">
            <a className="btn-download" href={cv} download>
              <i class="fa fa-download"></i> Download CV
            </a>
            <a className="btn-projects" href="#projects">
              My projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
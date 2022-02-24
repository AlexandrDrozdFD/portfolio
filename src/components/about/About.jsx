import './about.scss';
import face from '../../img/face.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about__left">
        {/* <div className="card card-bg"></div> */}
        <div className="card">
          <img src={face} alt="Alexander" className="card__img" />
        </div>
      </div>
      <div className="about__right">
        <h1 className="title">
          About me
        </h1>
        <p className="about-sub-desc">
          <strong>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsam iusto minima neque
            unde quo, quia perspiciatis amet at commodi,

          </strong>
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam, aspernatur ratione ipsam officiis cumque maiores necessitatibus inventore cupiditate excepturi iusto! In nobis, ipsum aliquid veniam laudantium provident fugiat quia nemo?
          Quidem doloribus dicta eos aliquid, expedita necessitati
          bus est quam omnis molestiae optio odit quisquam veni
        </p>
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default About;
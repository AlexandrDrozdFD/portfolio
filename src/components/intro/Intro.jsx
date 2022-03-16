import './intro.scss';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__left">
        <div className="left-wrap">
          <div className="left-wrap__text">
            Hello, my name is
          </div>
          <h1 className="left-wrap__name">
            Alexander
          </h1>
          <div className="left-wrap__title">
            <div className="title">
              <div className="title__item">Front-end Developer</div>
              <div className="title__item">UX</div>
              <div className="title__item">UI</div>
              <div className="title__item">React</div>
              <div className="title__item">Drupal</div>
            </div>
          </div>
          <div className="left-wrap__description">
          </div>
        </div>
      </div>
      <div className="intro__right">
        <div className="person-bg">
          <a
            className="btn-about"
            href="#about"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
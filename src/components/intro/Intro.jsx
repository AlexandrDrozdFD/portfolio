import './intro.scss';
// import me from '../../img/me.png';

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
              <div className="title__item">Node</div>
              <div className="title__item">Drupal</div>
            </div>
          </div>
          <p className="left-wrap__description">
            TEXT about me
          </p>
        </div>
      </div>
      <div className="intro__right">
        <div className="person-bg"></div>
        {/* <img src={me} alt="person" className='person'/> */}
      </div>
    </section>
  );
};

export default Intro;
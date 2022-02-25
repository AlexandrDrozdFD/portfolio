
import discord from '../../img/discord.png';
import address from '../../img/address.png';
import email from '../../img/email.png';
import './contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__bg-left"></div>
      <div className="contact__content">
        <div className="content-left">
          <h2 className="content-left__title">
            Let's discuss your project
          </h2>
          <dev className="content-left__info">
            <div className="info">
              <img src={discord} alt="" className="info__icon" />
              <a className="info__link"
                target="_blank"
                href="https://discord.com/channels/@Alexandr#0870">
                @Alexandr#0870
              </a>
            </div>
            <div className="info">
              <img src={address} alt="" className="info__icon" />
              <a className="info__link"
                target="_blank"
                href="https://goo.gl/maps/U62XuBwnDd89JEuJA">
                Belarus, Minsk
              </a>
            </div>
            <div className="info">
              <img src={email} alt="" className="info__icon" />
              <a className="info__link" href="mailto:alex.drozd.fd@gmail.com?subject=Mail">alex.drozd.fd@gmail.com</a>
            </div>
          </dev>
        </div>
        <div className="content-right">
          <p className="content-right__description">
            <b>Let's discuss!</b> Get in touch. Always available for
            freelancing.
          </p>
          <form className="content-right__form">
            <input type="text" className="form-input" placeholder="Name" name="user_name" />
            <input type="text" className="form-input" placeholder="Subject" name="user_subject" />
            <input type="text" className="form-input" placeholder="Email" name="user_email" />
            <textarea rows="5" className="form-textarea" placeholder="Message" name="user_message" />
            <button className="form-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
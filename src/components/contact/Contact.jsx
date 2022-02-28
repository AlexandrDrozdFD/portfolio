import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import discord from '../../img/discord.png';
import address from '../../img/address.png';
import email from '../../img/email.png';
import './contact.scss';


const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_etl4qqb', 'template_ql8qxlk', form.current, 'l-X0CzfHA79de1Uwy')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });

  };

  return (
    <section className="contact">
      <div className="contact__bg-left"></div>
      <div className="contact__content">
        <div className="content-left">
          <h2 className="content-left__title">
            Let's discuss your project
          </h2>
          <div className="content-left__info">
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
          </div>
        </div>
        <div className="content-right">
          <p className="content-right__description">
            <b>Let's discuss!</b> Get in touch. Always available for
            freelancing.
          </p>
          <form
            className="content-right__form"
            ref={form}
            onSubmit={handleSubmit}
          >
            <input type="text" className="form-input" placeholder="Name" name="user_name" required />
            <input type="text" className="form-input" placeholder="Subject" name="user_subject" required />
            <input type="email" className="form-input" placeholder="Email" name="user_email" required />
            <textarea rows="5" className="form-textarea" placeholder="Message" name="message" required />
            <button className="form-btn">Submit</button>
            {done && <div className="form-greeting">Thank you!</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
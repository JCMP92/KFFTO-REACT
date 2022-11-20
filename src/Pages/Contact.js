import './Contact.css';
import { ReactComponent as PhoneSvg } from '../Img/telephone.svg';
import { ReactComponent as WhatsSvg } from '../Img/whatsapp.svg';
import { ReactComponent as MailSvg } from '../Img/mail.svg';
import { ReactComponent as LocationSvg } from '../Img/gps.svg';
import { ReactComponent as FacebookSvg } from '../Img/facebook.svg';
import { ReactComponent as InstakSvg } from '../Img/instagram.svg';

function Contact() {
  return (
    <div id="contact-section">
      <div className="header-container">
        <h1>VIVE LA EXPERIENCIA DEL CAFÉ</h1>
      </div>
      <div className="contact-and-location">
        <div className="contact-and-social">
          <div className="contact-info">
            <h2 className="contact-title">¡Contáctanos!</h2>
            <div className="contact-icons-container">
              <div className="contacts-with-icons">
                <PhoneSvg className="contact-svg" />
                <a href="tel:5212212268367">2212268367</a>
              </div>
              <div className="contacts-with-icons">
                <WhatsSvg className="contact-svg" />
                <a href="https://wa.me/+5212212268367">2212268367</a>
              </div>
              <div className="contacts-with-icons">
                <MailSvg className="contact-svg" />
                <a href="mailto:kfftocafe@gmail.com">kfftocafe@gmail.com</a>
              </div>
              <div className="contacts-with-icons">
                <LocationSvg className="contact-svg" />
                <a href="https://www.google.com/maps/place/KFFTO/@19.022216,-98.2173783,15z/data=!4m5!3m4!1s0x0:0x1288559a221be44b!8m2!3d19.022216!4d-98.2173783">
                  Av 55 Pte 530-int. 4, Prados Agua Azul, 72530 Puebla, Pue.
                </a>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="link-to-social">
              <a
                href="https://www.facebook.com/Kffto"
                className="social_link"
                target="blank"
              >
                <FacebookSvg className="social-svg" />
              </a>
              <a
                href="https://www.instagram.com/kffto/?hl=es"
                className="social_link"
                target="blank"
              >
                <InstakSvg className="social-svg" />
              </a>
              <a
                href="https://www.google.com/maps/place/KFFTO/@19.022216,-98.2173783,15z/data=!4m5!3m4!1s0x0:0x1288559a221be44b!8m2!3d19.022216!4d-98.2173783"
                className="social_link"
                target="blank"
              >
                <LocationSvg className="social-svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

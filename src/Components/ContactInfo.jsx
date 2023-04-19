import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <section className="main main__content main__contact">
      <div className="contacts-content">
        <h2 className="font-lg">Contact me:</h2>
        <div className="contact">
          <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479749/portfolio/assets/png-icons/gmail_ycb5zs.png" />
          {/* <a className="contact-text" href="mailto:brianda.campoy@gmail.com"> */}
            <p className="font-md">brianda.campoy@gmail.com</p>
          {/* </a> */}
        </div>
        <NavLink
          className="contact"
          to="https://github.com/BriandaCampoy"
          target="_blank"
        >
          <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/GitHub-Mark_iufykf.png" />
          <p className="font-md">https://github.com/BriandaCampoy</p>
        </NavLink>
        <NavLink
          className="contact"
          to="https://www.linkedin.com/in/brianda-raquel-campoy-esquer-331624193/"
          target="_blank"
        >
          <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479750/portfolio/assets/png-icons/linkedin_mkelyo.png" />
          <p className="font-md">
            https://www.linkedin.com/in/brianda-raquel-campoy-esquer-331624193/
          </p>
        </NavLink>
        <div className="contact">
          <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479750/portfolio/assets/png-icons/whatsapp_u3rdp8.png" />
          <p className="font-md contact-text">+52 642-110-2585</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

import React from 'react'

const ContactInfo = () => {
  return (
    <section className="main main__content main__contact">
    <div className="contacts-content">
        <h2 className="font-lg">Contact me:</h2>
        <div className="contact">
            <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479749/portfolio/assets/png-icons/gmail_ycb5zs.png"/>
            <a className="contact-text" href="mailto:brianda.campoy@gmail.com"><p className="font-md" >brianda.campoy@gmail.com</p></a>
        </div>
        <div className="contact">
            <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1657843906/portfolio/assets/img_technologies/GitHub-Mark_iufykf.png"/>
            <a className="contact-text" href="https://github.com/BriandaCampoy"><p className="font-md">https://github.com/BriandaCampoy</p></a>
        </div>
        <div className="contact">
            <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479750/portfolio/assets/png-icons/linkedin_mkelyo.png"/>
            <a className="contact-text" href="https://www.linkedin.com/in/brianda-raquel-campoy-esquer-331624193/"><p className="font-md">https://www.linkedin.com/in/brianda-raquel-campoy-esquer-331624193/</p></a>
        </div>
        <div className="contact">
            <img src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479750/portfolio/assets/png-icons/whatsapp_u3rdp8.png"/>
            <p className="font-md contact-text">+52 642-110-2585</p>
        </div>
    </div>
</section>
  )
}

export default ContactInfo
import React from 'react';
import useCourses from '../../hooks/useCourses';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const AboutTheInstitution = ({institution}) => {
  const {getSchoolById} = useCourses();
  const school = getSchoolById(institution)
  console.log(school);
  return (
    <section className="main">
      <div className="main__content limitation">
        <p className="section-project font-lg">About the institution</p>
        <ReactMarkdown className='section__about'>{school?.aboutTheInstitution}</ReactMarkdown>
        <div className="social-media">
          <a href={school?.facebook} target='_blank'>
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479737/portfolio/assets/icons/FbIcon_btaod1.svg"
              alt=""
            />
          </a>
          <a href={school?.youtube} target='_blank'>
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479735/portfolio/assets/icons/YoutubeIcon_hlqmdt.svg"
              alt=""
            />
          </a>
          <a href={school?.twitter} target="_blank">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479735/portfolio/assets/icons/TwitterIcon_n8srxm.svg"
              alt=""
            />
          </a>
          <a href={school?.instagram} target="_blank">
            <img
              src="https://res.cloudinary.com/dtn1pnbmu/image/upload/v1659479731/portfolio/assets/icons/InstagramIcon_e8qwuu.svg"
              alt=""
            />
          </a>
        </div>
        <p className="font-sm">
          Sitio web:
          <a href={school?.webSite} target="_blank">
            {school?.webSite}
          </a>
          <br />
          {school?.address}
        </p>
      </div>
    </section>
  );
};

export default AboutTheInstitution;

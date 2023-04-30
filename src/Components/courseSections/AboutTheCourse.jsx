import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const AboutTheCourse = ({ course }) => {
  return (
    <section className="main">
      <div className="main__content limitation">
        <p className="section-project font-lg">{course?.name}</p>
        <div className="section-about--container">
          <ReactMarkdown className="section__about">
            {course?.aboutTheCourse}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default AboutTheCourse;

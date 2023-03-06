import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>My Resume</h2>
      <p>Here you can find my resume and qualifications:</p>
      <a href='https://docs.google.com/document/d/1mHddhcCbMOeAHXpq8TbNUpnQapy7W2svy4BvmfT1wIo/edit#' target='_blank' rel='noopener noreferrer'>Download Resume</a>
      <h1>Front-end Proficiencies</h1>
      <ul>
        <li>
            HTML
        </li>
        <li>
            CSS
        </li>
        <li>
            Javascript
        </li>
        <li>
            jQuery
        </li>
        <li>
            Responsive design
        </li>
        <li>
            React
        </li>
        <li>
            Bootstrap
        </li>
      </ul>
      <h1>Back-end Proficiencies</h1>
      <ul>
        <li>
           APIs
        </li>
        <li>
            Node
        </li>
        <li>
            Express
        </li>
        <li>
           MySQL, Sequelize
        </li>
        <li>
            MongoDB, Mongoose
        </li>
        <li>
           REST
        </li>
        <li>
           GraphQL
        </li>
      </ul>
    </div>
  );
};

export default Resume;
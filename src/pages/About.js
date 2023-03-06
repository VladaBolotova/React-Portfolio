import React from 'react';
import img from './me.jpg'

export default function About() {
  return (
    <div>
      <h1 className="mb-4 font-medium text-red" style={{marginLeft: '10px', marginRight: '10px'}}>About Me</h1>
      <img src={img} style={{width: '10%',height: '20%', borderRadius: '100px 100px 100px 100px', marginLeft: '10px', marginRight: '10px'}} alt="An image of me" />
      <h2 style={{ marginLeft: '10px', marginRight: '10px'}}>Website design. Build according to the latest web standarts. </h2>
      <p style={{fontSize: '30px', marginLeft: '10px', marginRight: '10px'}}>
        My name is Vladyslava Bolotova. I specialize in creating beautiful, usable, professional websites using best practice accessibility and latest web standarts quidelines, resulting in semantic and friendly HTML, CSS and JavaScript. All my sites are lovingly hand coded.
        I love combinig the worlds of logic and creative design to make eye-catching, accessable, and user-friendly websites and applications.
        Coding has become a perfect union of my two favourite passions and i love seeing the results of my efforts helping the user's experience. 
        I am finding unique solutions to complex problems.
        i am a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! 
      </p>
    </div>
  );
}


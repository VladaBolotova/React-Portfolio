import React from 'react';
import img from './fitness.png'

export default function About() {
  return (
    <div>
      <h1 className="mb-4 font-medium text-red">About Me</h1>
      <img src={img} style={{width: '20%',height: '50%', borderRadius: '100px 100px 100px 100px'}} alt="An image of me" />
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}


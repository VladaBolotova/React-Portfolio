import React from 'react';
import footer from './footer.css'

function Footer() {
    return (
        <footer>
        <div className ={`contact ${footer.contact}`}>
            <a href="tel:+13134006501"><i className="fa-solid fa-phone"></i></a>
            <a href="https://www.linkedin.com/in/vlada-bolotova-34b911257/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/VladaBolotova"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/ladaaa.b/?hl=en"><i className="fa-brands fa-instagram"></i></a>
            <a href="mailto:vladislavabolotova@gmail.com"><i className="fa-solid fa-square-envelope"></i></a>
        </div>
    
    </footer>
    )
}

export default Footer;


{/* <footer>
       <ul>
       <li a href ="tel:+3134006501"><i class="fa-solid fa-phone"></i></li>
        <li a href="https://www.linkedin.com/in/vlada-bolotova-34b911257/"><i class="fab fa-linkedin-in"></i></li>
        <li a href="https://github.com/VladaBolotova"><i class="fa-brands fa-github"></i></li>
       </ul>
      </footer> */}
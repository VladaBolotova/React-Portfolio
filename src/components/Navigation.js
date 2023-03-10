import styles from './header.module.css';
import React from 'react';



function Navigation({ currentPage, setCurrentPage }) {

function handlePageChange(page) {
  setCurrentPage(page)
}

  return (
    <ul className={`nav nav-tabs ${styles.now}`}>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
       

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
         

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
         Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
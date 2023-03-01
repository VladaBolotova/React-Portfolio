import React from 'react';
import Navigation from './Navigation';
import hedaerStyle from './header.module.css'

const styles = {
    heading: {
      background: '#3f51b5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };

  function Header() {
    return (

          <div style={styles.heading} className={hedaerStyle.header}>
            <h1>Vladyslava Bolotova</h1>
          <Navigation />
          </div>
          
       
      );
  }
  
  export default Header;
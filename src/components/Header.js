import React from 'react';
import Navigation from './Navigation';
import headerStyle from './header.module.css'

const styles = {
    heading: {
      background: '#000080',
      minHeight: 50,
      lineHeight: 1.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 1,
    },
  };

  function Header(props) {
    return (

          <div style={styles.heading} className={headerStyle.header}>
            <h1>Vladyslava Bolotova</h1>
          <Navigation setCurrentPage = {props.setCurrentPage} />
          </div>
          
       
      );
  }
  
  export default Header;
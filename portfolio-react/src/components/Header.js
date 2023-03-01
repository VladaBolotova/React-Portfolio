import React from 'react';

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

          <div style={styles.heading}>Vladyslava Bolotova
          <ul>
            <li>
                About me
            </li>
            <li>
                Portfolio
            </li>
            <li>
                Resume
            </li>
            <li>
                Contact
            </li>
          </ul>
          </div>
          
       
      );
  }
  
  export default Header;
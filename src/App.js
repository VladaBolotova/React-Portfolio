import './App.css'
import React, {useState}from 'react';
import About from './pages/About';
import Header from './components/Header';
// import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/Contact';



function App() {
  const pages = ['About', 'Resume', 'Contact', 'Portfolio' ]

  const [currentPage,setCurrentPage]=useState(pages[0]);

  const renderPage=()=>{
    switch(currentPage) {
      case 'About':
        return <About/> ;
      case 'Resume':
        return <Resume/> ;
      case 'Contact':
        return <ContactMe/>
      case 'Portfolio':
        return <Portfolio/>
        default:
          return <About/>;
    }
  }
  
  return (
  <div>
    <Header setCurrentPage={setCurrentPage} />

    {renderPage()}

    <Footer />
  </div>


  );
}

export default App;

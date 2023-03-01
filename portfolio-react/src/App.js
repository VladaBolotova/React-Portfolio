import './App.css'
import React from 'react';
import About from './pages/About';
import Header from './components/Header';
// import ContactMe from './components/pages/Contact';
// import Project from './components/Project';
import Footer from './components/Footer';
// import Resume from './components/Resume';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div>
<Header />
<About />
<Portfolio />
<Footer />


    </div>
  );
}

export default App;

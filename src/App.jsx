import React from 'react';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Publication from './components/publication/publication';
import Topbar from './components/topbar/Topbar';
import Courses from './components/courses/courses';


const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Publication />
      <Courses />
      <Contact />
      <Footer />
    </>
  )
}

export default App

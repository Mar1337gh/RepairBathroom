import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Main from './views/Main';
import Calculator from './components/Calculator';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contacts from './components/Contacts';

function App() {
const [page, setPage] = useState ('Main')

const Pages = {
  Main: <Main setPage = {setPage} />,
  AboutUs: <AboutUs />,
  Services: <Services />,
  Calculator: <Calculator />,
  Contacts: <Contacts />,
  Gallery: <Gallery />,
  Blog: <Blog />
}

  return (
    <div className="App">
      <Header setPage = {setPage}/>
      {Pages[page]}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Brand, Cta, Navbar } from './components';
import { WhatGpt, Header, Footer, Blog, Features, Possibility } from './containers';
import "./App.css";
function App(){
  return (
    <div className='App'>
    <div className='gradient__bg'>
        <Navbar />
        <Header/>
    </div>
    <Brand/>
    <WhatGpt/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import {Header} from './components/header';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello React
        </p>
        <Header info="This is my messagem" myNumber="6"/>
        <Header info="Another info" myNumber="10"/>
        <p>main content</p>
        <Footer trademark="Create by Murilo"/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import style from 'styled-components';

import {Header} from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';

function ShowMessage(props)
{
  var text;

  if(props.toShow)
  {
    text = <h2>My message</h2>
  }
  else
  {
    text = <h2>Forbidden</h2>
  }

  return text;
}

const Paragraph = style.p`
  font-size: 2em;
  color: green;
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Numbers/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Bulb from'./Bulb.js';
import Bio from'./Bio.js';
// import React, { useState } from 'react';

function App() {
  // const [hide, show] = useState(false);
  // const toshow = event => {this.setState(state => (this.show(true)))
  // }
  return (
    <div className="App">
      <container className="App-container">
        <header className="App-header">
          Nikky Lu 
        </header>
        <sub className="App-sub"> Where Things Diverge</sub>
        <Bio></Bio>
        <abstract className="App-abstract"> nikkylu.zl@gmail.com </abstract>
        <but className="App-but">© Nikky Lu 2022</but>
      </container>
      <Bulb></Bulb>
      <div id="root"></div>
    </div>
  );
}

export default App;


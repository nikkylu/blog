import './App.css';
import Bulb from'./Bulb.js';
import Bio from'./Bio.js';
import React, { useState } from 'react';
import "./Embed.css";
import Embed from "./Embed.js";
import { IconHelpOutline } from '@aws-amplify/ui-react';

function App() {
  const targetDiv = document.getElementById("bio");
  const btn = document.getElementById("text");
  const [hide, show] = useState(false);
  const toshow = event => {this.setState(state => (this.show(true)))
    if (this.show == true) {
      targetDiv.style.display = "bio";
    }
    else{
      targetDiv.style.display = "text";
    }
  }
  

  return (
    <div className="App">
      <container className="App-container">
        <header className="App-header">
          Nikky Lu 
        </header>
        <sub className="App-sub"> Where Things Diverge</sub>
        <Bulb></Bulb>
        <sub className="App-sub">Meditation I</sub>
        <Embed embedId="0TTEFwKfkmM" />
      </container>
      <bottom className="App-bottom">  
          <Bio></Bio>
          <abstract className="App-abstract"> nikkylu.zl@gmail.com </abstract>
          <but className="App-but">© Nikky Lu 2022</but>
      </bottom>
      {/* <button id="text" onClick= "toshow()"> Biography </button> */}
        {/* <Bio id="bio"></Bio>; */}
      
      <div id="root"></div>
    </div>
  );
}

export default App;


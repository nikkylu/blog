import a from './pic/a.jpg';
import './App.css';
import Bulb from './Bulb.js';


function App() {
  return (
    <div className="App">
      <header className="Nikky's Blog">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="App-header" >
          Where Things Diverge 
        </p>

      </header>
      {/* <img src={a} className = "App-pic"  /> */}
      <Bulb src={a}></Bulb>
      <div id="root"></div>
    </div>
    
  );
}

export default App;


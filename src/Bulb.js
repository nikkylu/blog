import React, { useState } from 'react';
import './Bulb.css';
import a from './pic/a.jpg';
import b from './pic/b.jpeg';
import c from './pic/c.jpeg';
import d from './pic/d.jpeg';
import e from './pic/e.jpeg';
import f from './pic/f.jpeg';
import g from './pic/g.jpeg';
import h from './pic/h.jpeg';
import i from './pic/i.jpeg';
import j from './pic/j.jpeg';
import k from './pic/k.jpeg';
import l from './pic/l.jpeg';
import m from './pic/m.jpeg';
import n from './pic/n.jpeg';

const imagesPath = {
  0: a,
  1: b,
  2: c,
  3: d,
  4: e,
  5: f,
  6: g,
  7: h,
  8: i,
  9: j,
  10:k,
  11:l,
  12:m,
  13:n
}
// const [count] = useState(0);

class Bulb extends React.Component {
  // count = 0;
  state = {
    count: 0
  };
  toggleImage = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  getImageName = () => this.state.count

  render() {
    const imageName = this.getImageName();
    return (
      <div>
        <img style={{maxHeight: '88vmin'}} src={imagesPath[imageName]} onClick={this.toggleImage} className ="Bulb"> 
        </img>
      </div>
    );
  }
}
  
  export default Bulb;

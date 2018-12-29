import React, { Component } from 'react';

import './styles.css'
import Header from './component/header_footer/Header'
import Featured from './component/featured/Featured'

class App extends Component {
  render() {
    return (
      <div style={{height: "1500px", background: "cornflowerblue"}}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;

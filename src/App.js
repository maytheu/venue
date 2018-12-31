import React, { Component } from 'react';
import { Element } from 'react-scroll'

import './styles.css'
import Header from './component/header_footer/Header'
import Featured from './component/featured/Featured'
import VenueInfo from './component/venueInfo/VenueInfo';
import Highlight from './component/highlight/Highlight';
import Pricing from './component/pricing/Pricing';
import Location from './component/location/Location';
import Footer from './component/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div style={{height: "1300px", background: "cornflowerblue"}}>
        <Header />
        <Element name="featured"><Featured /></Element>
        <Element name="venue"><VenueInfo /></Element>
        <Element name="highlight"><Highlight /></Element>
        <Element name="proce"><Pricing /></Element>
        <Element name="location"><Location /></Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;

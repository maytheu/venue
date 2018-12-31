import React, { Component } from 'react';

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
        <Featured />
        <VenueInfo />
        <Highlight />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;

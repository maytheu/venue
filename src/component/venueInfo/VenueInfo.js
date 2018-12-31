import React from 'react';
import Zoom from 'react-reveal/Zoom'

import icon_calender from '../../assets/images/icons/calendar.png'
import icon_location from '../../assets/images/icons/location.png'


const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon" style={{background: `url(${icon_calender})`}}></div>
                                    <div className="vn_title">Events Dates & Time</div>
                                    <div className="vn_desc">December 24, 2019 @12am </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{background: `url(${icon_location})`}}></div>
                                    <div className="vn_title">Events Location</div>
                                    <div className="vn_desc">TBS, Lagos </div>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default VenueInfo;
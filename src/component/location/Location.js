import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5998863307714!2d3.3993693143247956!3d6.4453891953369515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2256e8ed21%3A0xfa432641e893ac09!2sTafawa+Balewa+Square!5e0!3m2!1sen!2sng!4v1546245727223" 
                width="100%" 
                height="500" 
                frameBorder="0"  
                allowFullScreen></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;
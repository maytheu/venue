import React from 'react';
import Button from '@material-ui/core/Button'

import icon_btn from '../../assets/images/icons/ticket.png'


const Buttons = (props) => {
    return (
       <Button variant="contained" size="small" href={props.link} style={{background: props.bck, color: 'white'}}>
           <img src={icon_btn} alt="btn_icon" className="iconImage" />
           {props.text}
       </Button>
    );
};

export default Buttons;
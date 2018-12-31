import React from 'react';
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    const scrollToComponent = (components) => {
        scroller.scrollTo(components, {
            duration: 1500,
            delay: 100,
            offset: -150, 
            smooth: true
        })
        props.close(false)
    }
    return (
        <Drawer anchor="right" open={props.toggle} onClose={() => props.close(false)}>
            <List component="nav">
                <ListItem button onClick={() => scrollToComponent('featured')}>Events Starts In</ListItem>
                <ListItem button onClick={() => scrollToComponent('venue')}>Venue Info</ListItem>
                <ListItem button onClick={() => scrollToComponent('highlight')}>Highlights</ListItem>
                <ListItem button onClick={() => scrollToComponent('proce')}>Pricing</ListItem>
                <ListItem button onClick={() => scrollToComponent('location')}>Location</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
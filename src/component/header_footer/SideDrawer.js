import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer anchor="right" open={props.toggle} onClose={() => props.close(false)}>
            <List component="nav">
                <ListItem button onClick={() => console.log('Featrued')}>Events Starts In</ListItem>
                <ListItem button onClick={() => console.log('venue')}>Venue Info</ListItem>
                <ListItem button onClick={() => console.log('highlight')}>Highlights</ListItem>
                <ListItem button onClick={() => console.log('proce')}>Pricing</ListItem>
                <ListItem button onClick={() => console.log('location')}>Location</ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;
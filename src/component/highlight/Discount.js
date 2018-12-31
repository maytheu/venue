import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import Button from '../utils/Button'

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 45
    }
    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({discountStart: this.state.discountStart + 1})
        }
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 30)
    }
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade left onReveal={() => this.percentage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Ticket Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis. Praesent ultrices vehicula hendrerit. Maecenas ut ante ut magna viverra consequat. Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis. Duis lorem libero, vehicula fermentum elementum vel, finibus at purus. Curabitur feugiat felis a dolor ultricies interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet sem interdum, lacinia nulla ac, tincidunt odio.</p>
                            <Button
                            link="htttp://google.com"
                            text="Purchase Tickets"
                            bck="#ffa800" />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;
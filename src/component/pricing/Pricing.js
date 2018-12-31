import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom'

import Button from '../utils/Button'

class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        position: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit faucibus mollis.',
            'Sed pretium viverra quam non blandit. Nullam bibendum odio non posuere venenatis. Aliquam a quam non velit pharetra convallis.',
            'Duis lorem libero, vehicula fermentum elementum vel, finibus at purus'
        ],
        linkTo:[
            'http://google.com?q=balcony',
            'http://google.com?q=medium',
            'http://google.com?q=star'
        ],
        delay: [500, 0, 500]
    }
    showPrices = () => (
        this.state.prices.map((price, index) => (
            <Zoom delay={this.state.delay[index]} key={index}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>N{this.state.prices[index]}</span>
                            <span>{this.state.position[index]}</span>
                        </div>
                        <div className="pricing_description">{this.state.desc[index]}</div>
                        <div className="pricing_buttons">
                            <Button text="Purchase Ticket"
                                link={this.state.linkTo[index]}
                                bck="#ffa800" />
                        </div>
                    </div>
                </div>

            </Zoom>
        ))
    )
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showPrices()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
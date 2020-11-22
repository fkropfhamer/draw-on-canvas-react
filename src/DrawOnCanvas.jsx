import React, { Component } from 'react';
import Draw from 'draw-on-canvas';


export default class DrawOnCanvas extends Component {
    constructor(props) {
        super(props);

        this.div = null;

        this.setDivRef = element => {
            this.div = element;
        };
    }

    componentDidMount() {
        const { width, height, backgroundColor, strokeColor, strokeWeight} = this.props;

        this.draw = new Draw(this.div, width, height, { backgroundColor, strokeColor, strokeWeight })
    }

    changeStrokeColor(color) {
        this.draw.changeStrokeColor(color)
    } 

    render() {
        return <div ref={this.setDivRef} />
    };
}

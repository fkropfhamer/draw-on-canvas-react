import React, { Component } from 'react';
import Draw from 'draw-on-canvas';

interface Props {
    width?: number,
    height?: number,
    backgroundColor?: string,
    strokeColor?: string,
    strokeWeight?: number,
}

export default class DrawOnCanvas extends Component<Props> {
    private div: HTMLDivElement | null
    private setDivRef: (instance: HTMLDivElement | null) => void
    private draw: any

    constructor(props: Props) {
        super(props);

        this.div = null;

        this.setDivRef = (instance: HTMLDivElement | null) => {
            this.div = instance;
        };
    }

    componentDidMount() {
        const { width = 500, height = 500, backgroundColor, strokeColor, strokeWeight} = this.props;
        
        if(this.div) {
            this.draw = new Draw(this.div, width, height, { backgroundColor, strokeColor, strokeWeight })
        }
    }

    changeStrokeColor(color: string) {
        this.draw.changeStrokeColor(color)
    } 

    changeStrokeWeight(strokeWeight: number) {
        this.draw.changeStrokeWeight(strokeWeight);
    }

    changeBackgroundColor(backgroundColor: string) {
        this.draw.changeBackgroundColor(backgroundColor);
    }

    reset() {
        this.draw.reset();
    }

    render() {
        return <div ref={this.setDivRef} />
    };

    downloadPNG(filename?: string) {
        this.draw.downloadPNG(filename);
    }

    getGreyScalePixelArray() {
        return this.draw.getGreyScalePixelArray();
    }

    getPixelArray() {
        return this.draw.getPixelArray();
    }

    getDrawing() {
        return this.draw.getDrawing();
    }
}

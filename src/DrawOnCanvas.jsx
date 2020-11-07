import React, { useRef, useEffect } from 'react';
import Draw from 'draw-on-canvas';


export default function DrawOnCanvas(props) {
    const ref = useRef(null);
    const { width, height, backgroundColor, strokeColor, strokeWeight, drawReference } = props;
    
    useEffect(() => {
        const draw = new Draw(ref.current, width, height, { backgroundColor, strokeColor, strokeWeight })
        drawReference.current = draw;
      }, [])

    return (
        <div ref={ref} />
    );
}

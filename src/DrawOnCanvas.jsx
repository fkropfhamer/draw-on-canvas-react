import React, { useRef, useEffect } from 'react';

export default function DrawOnCanvas() {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        //Our first draw
        context.fillStyle = '#000000'
        context.fillRect(0, 0, context.canvas.width / 2, context.canvas.height / 2)
      }, [])

    return (
        <canvas ref={canvasRef} style={{backgroundColor: 'green'}}/>
    );
}

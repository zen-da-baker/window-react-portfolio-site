// Import React and state management
import React, { useState } from 'react';

export function Window(props) {

    // Current window position
    const [x, setX] = useState(100);
    const [y, setY] = useState(100);

    // State of dragging
    const [dragging, setDragging] = useState(false);

    // Dragging function with event object
    function drag(event) {

        // Current mouse position
        const currentX = event.clientX;
        const currentY = event.clientY;

        // Offset of mouse position against the window position
        const differenceX = currentX - x;
        const differenceY = currentY - y;

        // If dragging is true, let the window position update
        if (dragging === true) {

            console.log("current difference " + differenceX);

            // Set the window position to be the mouse position minus the offset
            setX(differenceX + x);
            setY(differenceY + y);
        }
    }

    function click() {
        setDragging(true);
    }

    function release() {
        setDragging(false);
    }
    

    return (
            <div className="window" id={props.project.name} style={{left: x, top: y}}>
                
                <header
                    className="window-header"

                    onMouseDown={click}
                    onMouseUp={release}
                    onMouseMove={drag}>

                    <h2 className="header-text">{props.project.name}</h2>
                    
                    <a className="new-tab" href={props.project.src} target="_blank" rel="noreferrer">
                        <button className="btn">Open in new Tab</button>
                    </a>
                    
                    <button onClick={() => props.closeWindow(props.project.name)} className="close btn">X</button>
                </header>
                
                <iframe src={props.project.localSrc} className="window-iframe" title={props.project.name}></iframe>
            </div>
    )
}
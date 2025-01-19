import React, { useState } from 'react';

import Draggable from 'react-draggable';

export function Window(props) {

    const [x, setX] = useState(100);
    const [y, setY] = useState(100);

    const [dragging, setDragging] = useState(false);

    function drag(event) {

        if (dragging === true) {
            const currentX = event.clientX;
            const currentY = event.clientY;

            setX(currentX - 200);
            setY(currentY - 50);
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
                    
                    <a href={props.project.src} target="_blank" rel="noreferrer">
                        <button>Open in new Tab</button>
                    </a>
                    
                    <button onClick={() => props.closeWindow(props.project.name)} className="close">X</button>
                </header>
                
                <iframe src={props.project.localSrc} className="window-iframe" title={props.project.name}></iframe>
            </div>
    )
}
import React, { useState } from 'react';

export function Window(props) {

    const [x, setX] = useState(100);
    const [y, setY] = useState(100);

    const [dragging, setDragging] = useState(false);

    function drag(event) {

        if (dragging === true) {
            const currentX = event.clientX;
            const currentY = event.clientY;

            setX(currentX - 200);
            setY(currentY - 35);
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
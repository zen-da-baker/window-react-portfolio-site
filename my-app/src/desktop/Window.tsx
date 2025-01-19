import React, { useState } from 'react';

import Draggable from 'react-draggable';

export function Window(props) {

    const [x, setX] = useState(100);
    const [y, setY] = useState(100);

    const window = document.getElementById(props.project.name);

    function drag(event) {
        const currentX = event.clientX;
        const currentY = event.clientY;

        setX(currentX - 200);
        setY(currentY - 25);
    }

    function click() {

        

        window.addEventListener("mousemove", drag);

        console.log("Click");

        
    }

    function release() {
        console.log("release");


        window.removeEventListener("mousemove", drag);
    }
    

    return (
            <div className="window" id={props.project.name} style={{left: x, top: y}}>
                
                <header 
                    onMouseDown={click}
                    onMouseUp={release}>
                    
                    <a href={props.project.src} target="_blank" rel="noreferrer">
                        <button>Open in new Tab</button>
                    </a>
                    
                    <button onClick={() => props.closeWindow(props.project.name)}>X</button>
                </header>
                
                <iframe src={props.project.localSrc} className="window-iframe" title={props.project.name}></iframe>
            </div>
    )
}
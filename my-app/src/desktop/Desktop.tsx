import React, { useState } from 'react';

import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

export function Desktop() {

    const [click, setClick] = useState(false);

    const [x, setX] = useState(50);
    const [y, setY] = useState(50);

    function reposition(event) {
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if (click === true) {
            setX(mouseX);
            setY(mouseY);
       }
    }

    function handleMouseDown() {
        console.log("down")
        setClick(true);
    }

    function handleMouseUp() {
        console.log("up")
        setClick(false);
    }

    return (
        <main>
            <h1>Desktop</h1>
            
            <div
                className="window"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={(event) => reposition(event)}
                
                >
                <p>https://donovanfrazier.com/projects/valorant-personality-quiz/index.html</p>
            
                <iframe 
                    id="window-1"
                    style={{
                        left: x,
                        top: y
                    }}
                    
                    className="window" 
                    src="https://donovanfrazier.com/projects/valorant-personality-quiz/index.html">
                    </iframe>
            </div>

                <p>{x}</p>
                <p>{y}</p>

            <Taskbar />
            <StartMenu />
        </main>
    )
}
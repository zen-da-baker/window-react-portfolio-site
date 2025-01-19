import React, { useState } from 'react';

import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

import { projects } from '../projects/projects.ts';
import { Window } from './Window.tsx';

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

    function createWindow(source) {
        const newElement = document.createElement("iframe");
        
        newElement.src = source;
        newElement.style.zIndex = "2";
        newElement.style.position = "relative";
        newElement.style.left = "50%";

        document.body.insertBefore(newElement, null);

        return newElement;
    }

    function displayWindow(id) {
        const element = document.getElementById(id);

        if (element !== null) {
            element.style.display = "block";
        }
    }

    return (
        <main>
            <h1>Desktop</h1>

            <div className="icon" onClick={() => displayWindow(projects.valorant.name)}>
                <p>{projects.valorant.name}</p>
            </div>

            <div className="icon" onClick={() => displayWindow(projects.tv.name)}>
                <p>{projects.tv.name}</p>
            </div>

            <div className="icon" onClick={() => displayWindow(projects.mathQuiz.name)}>
                <p>{projects.mathQuiz.name}</p>
            </div>

            <div className="icon" onClick={() => displayWindow(projects.weather.name)}>
                <p>{projects.weather.name}</p>
            </div>

            <div className="icon" onClick={() => displayWindow(projects.radiantSun.name)}>
                <p>{projects.radiantSun.name}</p>
            </div>

            <div className="icon" onClick={() => displayWindow(projects.quiltsByGinny.name)}>
                <p>{projects.quiltsByGinny.name}</p>
            </div>

            <Window project={projects.tv} />

            <Window project={projects.mathQuiz} />

            <Window project={projects.weather} />

            <Window project={projects.radiantSun} />

            <Window project={projects.quiltsByGinny} />
            {
                    /*
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
                    src={projects.valorant.localSrc}>
                    </iframe>
                    
            </div>
            */
        }

                <p>{x}</p>
                <p>{y}</p>

            <Taskbar />
            <StartMenu />
        </main>
    )
}
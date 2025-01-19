import React, { useState } from 'react';

import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

import { projects } from '../projects/projects.ts';
import { Window } from './Window.tsx';

import Draggable from 'react-draggable';

export function Desktop() {

    const [displayProjects, setDisplayProjects] = useState<Array<Window>>([]);

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

    function displayWindow(projectName: string) {

        const foundIndex: number = projects.findIndex(project => project.name === projectName);

        console.log(projects[foundIndex])

        if (foundIndex > -1) {

            displayProjects.push(<Window project={projects[foundIndex]} closeWindow={closeWindow} />);

            setDisplayProjects(() => {
                return [displayProjects];
            })
        }
    }

    function closeWindow(projectName: string) {

        const foundIndex: number = displayProjects.findIndex(project => project.props.project.name === projectName);

        console.log(displayProjects[foundIndex])

        if (foundIndex > -1) {
            setDisplayProjects((prevState) => {
                return prevState.splice(foundIndex, 1);
            })
        }
    }

    const icons = projects.map(project => {
        return (
            <div className="icon" onClick={() => displayWindow(project.name)}>
                <p>{project.name}</p>
            </div>
        )
    })

    return (
        <main>
            
            {
                icons
            }

            {
                displayProjects
            }


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
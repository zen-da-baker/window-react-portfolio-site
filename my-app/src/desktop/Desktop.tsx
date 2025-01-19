import React, { useState } from 'react';

import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

import { projects } from '../projects/projects.ts';
import { Window } from './Window.tsx';

export function Desktop() {

    const [displayProjects, setDisplayProjects] = useState<Array<Window>>([]);

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

            displayProjects.splice(foundIndex, 1);

            setDisplayProjects(displayProjects)
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
        <main className="desktop">
            
            {
                icons
            }

            {
                displayProjects
            }


            <Taskbar />
            <StartMenu />
        </main>
    )
}
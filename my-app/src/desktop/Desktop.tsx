import React, { useState } from 'react';

import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

import { projects } from '../projects/projects.ts';
import { Window } from './Window.tsx';

export function Desktop() {

    const [displayProjects, setDisplayProjects] = useState<Array<Window>>([]);

    function displayWindow(projectName: string) {

        const foundIndex: number = projects.findIndex(project => project.name === projectName);


        if (foundIndex > -1) {

            setDisplayProjects((projectsList) => {
                return [...projectsList, <Window key={projects[foundIndex].name} project={projects[foundIndex]} closeWindow={closeWindow} />];
            })
        }
    }

    function closeWindow(projectName: string) {

        // const foundIndex: number = displayProjects.findIndex(project => project.props.project.name === projectName);

        // if (foundIndex > -1) {

        console.log(displayProjects)

            setDisplayProjects(
                displayProjects.filter((project) => {
                   return project.key !== projectName;
                })
            )
        // }
    }

    const icons = projects.map(project => {
        return (
            <div className="icon" key={project.name} onClick={() => displayWindow(project.name)}>
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
// Import React and state management
import React, { useState } from 'react';

// Import taskbar and start menu
import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

// Import projects array and windows
import { projects } from '../projects/projects.ts';
import { Window } from './Window.tsx';

export function Desktop() {

    // Displays array in state management
    const [displayProjects, setDisplayProjects] = useState<Array<React.JSX.Element>>([]);

    // Function for adding a window to the display based on the icon pressed
    function displayWindow(projectName: string) {

        // Find the exact project based on the icon selected
        const foundIndex: number = projects.findIndex(project => project.name === projectName);

        // If the icon leads to an existing project, add the project to the display of windows 
        if (foundIndex > -1) {

            // Update the array of windows being displayed
            setDisplayProjects(() => {
                return [...displayProjects, 
                    <Window 
                        index={displayProjects.length} 
                        key={projects[foundIndex].name} 
                        project={projects[foundIndex]} 
                        closeWindow={() => closeWindow(displayProjects.length)} 
                    />];
            })
        }
    }

    // Function for closing the window
    function closeWindow(targetIndex: number) {

        // const newArr = displayProjects.filter((window) => window.props.index !== targetIndex);

        const newArr = [...displayProjects];

        newArr.splice(targetIndex, 1);

        // Removing a window from the display of windows
        setDisplayProjects(newArr);
        
    }

    // Creates and array of icons 
    const icons = projects.map(project => {
        return (
            <div className="icon" key={project.name} onClick={() => displayWindow(project.name)}>
                <img className="icon-img" src="./favicon.ico" alt="Favicon" />
                <p className="icon-text">{project.name}</p>
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

            <p>Active Windows {displayProjects.length}</p>


            <Taskbar />
            <StartMenu />
        </main>
    )
}
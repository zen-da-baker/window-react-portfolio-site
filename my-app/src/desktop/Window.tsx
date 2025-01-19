import React from 'react';

export function Window(project) {

    function hideWindow() {
        const thisWindow = document.getElementById(project.name);

        if (thisWindow !== null) {
            thisWindow.style.display = "none";
        }
    }

    return (
        <div className="window" id={project.name}>
            <a href={project.src} target="_blank" ><button>Open in new Tab</button></a>
            <button onClick={hideWindow}>X</button>
            <iframe src={project.localSrc} className="window-iframe">

            </iframe>
        </div>
    )
}
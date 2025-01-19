import React from 'react';

export function Window(props) {

    /*
    function hideWindow() {
        const thisWindow = document.getElementById(project.name);

        if (thisWindow !== null) {
            thisWindow.style.display = "none";
        }
    }
        */

    return (
        <div className="window" id={props.project.name}>
            
            <a href={props.project.src} target="_blank" ><button>Open in new Tab</button></a>
            
            <button onClick={() => props.closeWindow(props.project.name)}>X</button>
            
            <iframe src={props.project.localSrc} className="window-iframe">

            </iframe>
        </div>
    )
}
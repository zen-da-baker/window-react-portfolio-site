// Import React and state management
import React, { useState } from 'react';

// Create initial date
const date = new Date();

// Create the day, month, and year variables
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

// Get the hour and minute variables in an updatable form
let hours = date.getHours();
let minutes = date.getMinutes();

// If the default hour format is greater than 12, change it to the common 12 hour version
if (hours > 12) {
    hours = hours - 12;
}

// Component model
export function Taskbar() {

    // State for the minutes and hours to update on screen
    const [hoursState, setHours] = useState<number>(hours);
    const [minutesState, setMinutes] = useState<number>(minutes);

    // Set the minutes and hours to be the new current minutes and hours
    function incrementMinutes() {

        // Create a temporary date object with each function call 
        const newDate = new Date();

        // Update minutes and hours with the new current time
        minutes = newDate.getMinutes();
        hours = newDate.getHours();

        // Set the new current minutes and hours in the state
        setHours(hours);
        setMinutes(minutes);
    }

    // Update the minutes and hours once a minute
    setTimeout(incrementMinutes, 1000 * 60);


    // View of taskbar 
    return (
        <div className="taskbar">
            <p className="taskbar-date">{ month + 1 } / { day } / {year}</p>
            <p className="taskbar-hours">{hoursState} : {minutesState}</p>
        </div>
    )
}
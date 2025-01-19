import React from 'react';

import { Taskbar } from './Taskbar.tsx';
import { StartMenu } from './StartMenu.tsx';

export function Desktop() {
    return (
        <main>
            <h1>Desktop</h1>

            <Taskbar />
            <StartMenu />
        </main>
    )
}
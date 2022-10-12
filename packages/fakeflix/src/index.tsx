import React from 'react';
import {createRoot} from "react-dom/client";
import {GlobalStyle} from "@common/design-system/src/theme";


export default function App() {
    return (
        <>
            <GlobalStyle/>
            Hello
        </>
    );
}

const container = document.getElementById('root');
createRoot(container!).render(<App/>);

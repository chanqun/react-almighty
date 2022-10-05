import React from 'react';

import {createRoot} from "react-dom/client";
import {StudyButton} from "@common/design-system";

const CloudTest = () => {
    return (
        <div>cloud test</div>
    )
}
// const
// let :
// var : 전역적을 사용 가능

export default function App() {
    return <>
        <StudyButton></StudyButton>
    </>;
}

const container = document.getElementById('root');
createRoot(container!).render(<App/>);

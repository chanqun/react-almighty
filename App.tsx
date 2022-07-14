import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./src/page/Test";
import Home from "./src/page/Home";
import Header from "./src/component/Header";
import Footer from "./src/component/Footer";
import {Global, css} from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
`

// const
// let :
// var : 전역적을 사용 가능

export default function App() {
    return (
        // fragment
        <React.Fragment>
            <Global styles={globalStyles}/>
            <BrowserRouter>
                {/* 페이지 변경시, Routes 에서 스위칭이 이루어짐 */}
                <Header></Header>

                <Routes>
                    <Route path={"home"} element={<Home/>}/>
                    <Route path={"test"} element={<Test/>}/>
                </Routes>

                <Footer></Footer>
            </BrowserRouter>
        </React.Fragment>
    );
}

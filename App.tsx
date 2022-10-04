import React from 'react';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./packages/beta/src/page/Test";
import Home from "./packages/beta/src/page/Home";
import Header from "./packages/beta/src/component/Header";
import Footer from "./packages/beta/src/component/Footer";
import {Global, css} from '@emotion/react';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
`

const CloudTest = () => {
    return (
        <div>cloud test</div>
    )
}
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
                    <Route path={"/"}>
                        <Route index element={<Home/>}/>
                        <Route path={"test"} element={<Test/>}/>
                        <Route path={"cloud"}>
                            <Route index element={<CloudTest/>}/>
                            <Route path={"test"} element={<CloudTest/>}/>
                        </Route>
                    </Route>
                </Routes>

                <Footer></Footer>
            </BrowserRouter>
        </React.Fragment>
    );
}

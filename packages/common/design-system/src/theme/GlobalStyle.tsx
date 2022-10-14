import React from 'react';
import {css, Global} from "@emotion/react";
import {fontFaceStyle} from "./typography/fontFaceStyle";

export const GlobalStyle = () => {
    return (
        <Global
            styles={[fontFaceStyle, css`
              html, body {
                margin: 0;
                padding: 0;
                background-color: aqua;
                font-family: 'Galmuri9 Regular';
              }
            `]}
        ></Global>
    );
}

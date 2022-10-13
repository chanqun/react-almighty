import React from 'react';
import {css, Global} from "@emotion/react";
import {fondFaceStyle} from "~/theme/typography/fondFaceStyle";

export const GlobalStyle = () => {
    return (
        <Global
            styles={[fondFaceStyle, css`
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

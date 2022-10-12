import React from 'react';
import {css, Global} from "@emotion/react";

export const GlobalStyle = () => {
    return (
        <Global
            styles={css`
              html, body {
                margin: 0;
                padding: 0;
              }
            `}
        ></Global>
    );
}

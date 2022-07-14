import React from "react";
import {Link} from "react-router-dom";
import styled from "@emotion/styled";

const StyleDiv = styled.div`
  background-color: hotpink;
`;

const Header = () => {
    return (
        <StyleDiv>
            <div>
                <ul>
                    <li>
                        <Link to={"home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"test"}>Test</Link>
                    </li>
                </ul>
            </div>
        </StyleDiv>
    );
};

export default Header;

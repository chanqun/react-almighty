import styled from "@emotion/styled";
import {FC, ReactNode} from "react";

interface BoxProps {
    children: ReactNode;
}

export const Box: FC<BoxProps> = ({children}) => {
    return (<BoxContainer>{children}</BoxContainer>)
}

const BoxContainer = styled.div`
  width: 100px;
  height: 100px;
  background: cornflowerblue;
`

import React from "react";
import styled from "styled-components";

const Console = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  height: 4rem;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  z-index: 2;
`;

const OutputArea = styled.div`
  background: #e7e7e7;
  flex-grow: 1;
`;

const OutputConsole = () => {
  return (
    <Console>
      <Header>InputConsole</Header>
      <OutputArea>ss</OutputArea>
    </Console>
  );
};

export default OutputConsole;

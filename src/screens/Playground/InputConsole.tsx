import React from "react";
import styled from "styled-components";

const Console = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 4rem;
  background: #ededed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
`;

const InputConsole = () => {
  return (
    <Console>
      <Header>InputConsole</Header>
      <TextArea>Hi</TextArea>
    </Console>
  );
};

export default InputConsole;

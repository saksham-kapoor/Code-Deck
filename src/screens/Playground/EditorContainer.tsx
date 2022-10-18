import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CodeEditor from "./CodeEditor";
import Select from "react-select";

const StyledEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpperToolbar = styled.div`
  background: white;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const LowerToolbar = styled.div`
  background: white;
  height: 4rem;
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EditorContainer = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <StyledEditorContainer>
      <UpperToolbar>
        <div>
          <h3>Stack Implementation</h3>
        </div>
        <SelectContainer>
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
        </SelectContainer>
      </UpperToolbar>
      <CodeEditor />
      <LowerToolbar>lower</LowerToolbar>
    </StyledEditorContainer>
  );
};

export default EditorContainer;

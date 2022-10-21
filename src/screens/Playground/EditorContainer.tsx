import React, { useState } from "react";
import { BiEditAlt, BiExport, BiFullscreen, BiImport } from "react-icons/bi";
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

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: 1.3rem;
  }

  button {
    background: transparent;
    font-size: 1.3rem;
    border: 0;
    outline: 0;
  }
`;

const LowerToolbar = styled.div`
  background: white;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  button {
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 1.15rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      font-size: 1.4rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const RunCode = styled.button`
  padding: 0.8rem 2rem;
  background-color: #0097d7 !important;
  color: white;
  font-weight: 700;
  border-radius: 2rem;
`;

const SaveCode = styled.button`
  padding: 0.4rem 1rem;
  background-color: #0097d7 !important;
  color: white;
  font-weight: 700;
  border-radius: 2rem;
  border: 0;
`;

const SelectBars = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > div:nth-of-type(1) {
    width: 10rem;
  }

  & > div:nth-of-type(2) {
    width: 11rem;
  }
`;

interface EditorContainerProps {
  title: string;
  language: string;
  folderId: string;
  playgroundId: string;
  code: string;
  editCardLanguage: (folderId: string, cardId: string, newLang: string) => void;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  title,
  language,
  folderId,
  playgroundId,
  editCardLanguage,
  code,
}) => {
  const languageOptions = [
    { value: "c++", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
  ];

  const themeOptions = [
    { value: "duotoneLight", label: "duotoneLight" },
    { value: "duotoneDark", label: "duotoneDark" },
    { value: "xcodeLight", label: "xcodeLight" },
    { value: "xcodeDark", label: "xcodeDark" },
    { value: "okaidia", label: "okaidia" },
    { value: "githubDark", label: "githubDark" },
    { value: "githubLight", label: "githubLight" },
    { value: "bespin", label: "bespin" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      if (languageOptions[i].value === language) return languageOptions[i];
    }
    return languageOptions[0];
  });

  const [selectedTheme, setSelectedTheme] = useState({
    value: "githubDark",
    label: "githubDark",
  });

  const handleChangeLanguage = (selectedOption: any) => {
    setSelectedLanguage(selectedOption);
  };

  const handleChangeTheme = (selectedOption: any) => {
    setSelectedTheme(selectedOption);
  };

  // import code
  function getFile(event: any) {
    const input = event.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(
        document.getElementById("content-target"),
        input.files[0]
      );
    }
  }

  function placeFileContent(target: any, file: any) {
    readFileContent(file)
      .then((content) => {
        console.log(content);
      })
      .catch((error) => console.log(error));
  }

  function readFileContent(file: any) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event!.target!.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }

  return (
    <StyledEditorContainer>
      {/* Upper Toolbar Begins */}
      <UpperToolbar>
        <Title>
          <h3>{title}</h3>
          <button>
            <BiEditAlt />
          </button>
        </Title>
        <SelectBars>
          <SaveCode>Save Code</SaveCode>
          <Select
            value={selectedLanguage}
            options={languageOptions}
            onChange={handleChangeLanguage}
          />
          <Select
            value={selectedTheme}
            options={themeOptions}
            onChange={handleChangeTheme}
          />
        </SelectBars>
      </UpperToolbar>
      {/* Upper Toolbar Ends */}

      {/* Code Editor Begins */}
      <CodeEditor
        currentLanguage={selectedLanguage.value}
        currentTheme={selectedTheme.value}
        currentCode={code}
      />
      {/* Code Editor Ends */}

      {/* Lower Toolbar Begins */}
      <LowerToolbar>
        <ButtonGroup>
          <button>
            <BiFullscreen />
            Full Screen
          </button>
          <button>
            <input
              type='file'
              accept='.txt'
              id='input-file'
              onChange={(e) => getFile(e)}
            />
            <p id='content-target'></p>
            <BiImport /> Import Code
          </button>
          <button>
            <BiExport />
            Export Code
          </button>
        </ButtonGroup>
        <RunCode>Run Code</RunCode>
      </LowerToolbar>
      {/* Lower Toolbar Ends */}
    </StyledEditorContainer>
  );
};

export default EditorContainer;

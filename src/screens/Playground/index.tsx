import React, { useContext } from "react";
import EditorContainer from "./EditorContainer";
import InputConsole from "./InputConsole";
import Navbar from "./Navbar";
import OutputConsole from "./OutputConsole";
import { useParams } from "react-router-dom";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import styled from "styled-components";

const MainApp = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - 4.5rem);
`;

const Consoles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Playground = () => {
  const { folderId, playgroundId } = useParams();

  // access all playgrounds
  const { folders, editCardLanguage } = useContext(PlaygroundContext)!;
  const { title, language, code } =
    folders[folderId as string].items[playgroundId as string];

  return (
    <div>
      <Navbar />
      <MainApp>
        <EditorContainer
          title={title}
          language={language}
          folderId={folderId as string}
          playgroundId={playgroundId as string}
          code={code as string}
          editCardLanguage={editCardLanguage}
        />
        <Consoles>
          <InputConsole />
          <OutputConsole />
        </Consoles>
      </MainApp>
    </div>
  );
};

export default Playground;

import React, { useContext } from "react";
import EditorContainer from "./EditorContainer";
import InputConsole from "./InputConsole";
import Navbar from "./Navbar";
import OutputConsole from "./OutputConsole";
import { useParams } from "react-router-dom";
import { PlaygroundContext } from "../../context/PlaygroundContext";

const Playground = () => {
  const { folderId, playgroundId } = useParams();

  // access all playgrounds
  const { folders } = useContext(PlaygroundContext)!;
  const { title, language } =
    folders[folderId as string].items[playgroundId as string];

  return (
    <div>
      {title}
      <br />
      {language}
      <Navbar />
      <div>
        <EditorContainer />
        <div>
          <InputConsole />
          <OutputConsole />
        </div>
      </div>
    </div>
  );
};

export default Playground;

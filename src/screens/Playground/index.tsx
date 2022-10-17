import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal";
import { ModalContext } from "../../context/ModalContext";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import CodeEditor from "./CodeEditor";
import EditorContainer from "./EditorContainer";
import InputConsole from "./InputConsole";
import Navbar from "./Navbar";
import OutputConsole from "./OutputConsole";

const Playground = () => {
  // fetch these from router
  let { folderId, playgroundId } = useParams();

  // open modal to edit card title
  const { isOpen } = useContext(ModalContext)!;

  // fetch current code from localStorage
  const [currentCode, setCurrentCode] = useState(() => {
    let localData = localStorage.getItem(`playground-${playgroundId}`);
    localData = localData === null || localData === "" ? null : localData;
    return localData || "print('Hello World')";
  });

  // fetch playground title and language
  const { folders } = useContext(PlaygroundContext)!;
  const { title, language } =
    folders[folderId as string].items[playgroundId as string];

  // update code in localstorage as well
  useEffect(() => {
    localStorage.setItem(`playground-${playgroundId}`, currentCode);
  }, [currentCode, playgroundId]);

  return (
    <div>
      <Navbar />
      <div>
        <EditorContainer
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
          title={title}
          language={language}
        />
        <div>
          <InputConsole />
          <OutputConsole />
        </div>
      </div>
      {isOpen.value === true ? <Modal /> : <></>}
    </div>
  );
};

export default Playground;

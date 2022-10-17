import React from "react";
import CodeEditor from "./CodeEditor";

interface CodeEditorProps {
  currentCode: string;
  setCurrentCode: (newCode: string) => void;
  title: string;
  language: string;
}

const EditorContainer: React.FC<CodeEditorProps> = ({
  currentCode,
  setCurrentCode,
  title,
  language,
}) => {
  return (
    <div>
      <CodeEditor
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        editorTheme={""}
        codingLanguage={language}
      />
    </div>
  );
};

export default EditorContainer;

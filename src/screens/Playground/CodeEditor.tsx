import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { duotoneLight, duotoneDark } from "@uiw/codemirror-theme-duotone";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { bespin } from "@uiw/codemirror-theme-bespin";
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";

interface CodeIDEProps {
  currentCode: any;
  setCurrentCode: any;
  codingLanguage: any;
  editorTheme: any;
}

const CodeEditor: React.FC<CodeIDEProps> = ({
  currentCode, // based on playground
  setCurrentCode,
  codingLanguage, // based on playground
  editorTheme, // global state
}) => {
  // code editor config
  const [theme, setTheme] = useState<any>(githubDark);
  const [lang, setLang] = useState<any>(cpp);

  const languageSelect = (tag: string) => {
    if (tag === "javascript") setLang(javascript);
    if (tag === "python") setLang(python);
    if (tag === "java") setLang(java);
    if (tag === "cpp") setLang(cpp);
  };

  const themeSelect = (themeOption: string) => {
    if (themeOption === "duotoneLight") setTheme(duotoneLight);
    if (themeOption === "duotoneDark") setTheme(duotoneDark);
    if (themeOption === "xcodeLight") setTheme(xcodeLight);
    if (themeOption === "xcodeDark") setTheme(xcodeDark);
    if (themeOption === "okaidia") setTheme(okaidia);
    if (themeOption === "githubLight") setTheme(githubLight);
    if (themeOption === "githubDark") setTheme(githubDark);
    if (themeOption === "darcula") setTheme(darcula);
    if (themeOption === "bespin") setTheme(bespin);
  };

  // update codeText
  const handleEditorChange = (value: any, event: any) => {
    setCurrentCode(value);
  };

  useEffect(() => {
    languageSelect(codingLanguage);
  }, [codingLanguage]); // coding language -> based on given playground

  useEffect(() => {
    themeSelect(editorTheme);
  }, [editorTheme]); // based on global preference

  return (
    <div
      className={"code-editor"}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <CodeMirror
        className={"main-editor"}
        style={{
          fontFamily: "'Source Code Pro', monospace !important",
        }}
        value={currentCode}
        height='100%'
        extensions={[
          lang,
          indentUnit.of("        "),
          EditorState.tabSize.of(8),
          EditorState.changeFilter.of(() => true),
        ]}
        theme={theme}
        onChange={handleEditorChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          defaultKeymap: true,
          searchKeymap: true,
          historyKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;

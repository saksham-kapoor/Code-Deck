import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
// themes
import { duotoneLight, duotoneDark } from "@uiw/codemirror-theme-duotone";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { bespin } from "@uiw/codemirror-theme-bespin";
// languages
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
// configuration
import { indentUnit } from "@codemirror/language";
import { EditorState } from "@codemirror/state";
import styled from "styled-components";

const CodeEditorContainer = styled.div`
  height: calc(100vh - 12.5rem);

  & > div {
    height: 100%;
  }
`;

interface CodeEditorProps {
  currentLanguage: string;
  currentTheme: string;
  currentCode: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  currentLanguage,
  currentTheme,
  currentCode,
}) => {
  // code editor configuration
  const [theme, setTheme] = useState<any>(githubDark);
  const [lang, setLang] = useState<any>(python);

  // handle language change
  useEffect(() => {
    if (currentLanguage === "javascript") setLang(javascript);
    if (currentLanguage === "python") setLang(python);
    if (currentLanguage === "java") setLang(java);
    if (currentLanguage === "c++") setLang(cpp);
  }, [currentLanguage]);

  // handle theme change
  useEffect(() => {
    if (currentTheme === "duotoneLight") setTheme(duotoneLight);
    if (currentTheme === "duotoneDark") setTheme(duotoneDark);
    if (currentTheme === "xcodeLight") setTheme(xcodeLight);
    if (currentTheme === "xcodeDark") setTheme(xcodeDark);
    if (currentTheme === "okaidia") setTheme(okaidia);
    if (currentTheme === "githubLight") setTheme(githubLight);
    if (currentTheme === "githubDark") setTheme(githubDark);
    if (currentTheme === "darcula") setTheme(darcula);
    if (currentTheme === "bespin") setTheme(bespin);
  }, [currentTheme]);

  return (
    <CodeEditorContainer>
      <CodeMirror
        theme={theme}
        height='100%'
        extensions={[
          lang,
          indentUnit.of("        "),
          EditorState.tabSize.of(8),
          EditorState.changeFilter.of(() => true),
        ]}
        value={currentCode}
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
    </CodeEditorContainer>
  );
};

export default CodeEditor;

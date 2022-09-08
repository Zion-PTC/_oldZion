import React from "react";
import Editor from "@monaco-editor/react";
import { OnChange } from "@monaco-editor/react";

export const CodeEditor = (props: {
  value: string;
  setCodechanges: React.Dispatch<React.SetStateAction<string>>;
  language: string;
  theme: string;
  height: string;
  width: string;
}) => {
  const { value, setCodechanges, language, theme, height, width } = props;

  const handleEditorChange: OnChange = (value?: string) => {
    if (!value) return;
    setCodechanges(value);
  };

  return (
    <Editor
      height={height}
      width={width}
      language={language}
      value={value}
      theme={theme}
      onChange={handleEditorChange}
    />
  );
};

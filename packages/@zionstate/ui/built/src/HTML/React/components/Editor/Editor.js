import React from "react";
import Editor from "@monaco-editor/react";
export const CodeEditor = (props) => {
    const { value, setCodechanges, language, theme, height, width } = props;
    const handleEditorChange = (value) => {
        if (!value)
            return;
        setCodechanges(value);
    };
    return (React.createElement(Editor, { height: height, width: width, language: language, value: value, theme: theme, onChange: handleEditorChange }));
};

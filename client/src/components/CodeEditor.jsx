import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ language, theme, code, onEditorChange, fontSize }) => {
  return (
    <div className="w-full rounded-md overflow-hidden flex flex-col gap-2">
      <Editor
        height="85vh"
        width="w-full"
        language={language}
        theme={theme}
        value={code}
        onChange={(e) => onEditorChange(e)}
        options={{
          fontSize: fontSize,
          scrollBeyondLastLine: false,
        }}
      />{" "}
    </div>
  );
};

export default CodeEditor;

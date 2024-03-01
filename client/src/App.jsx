import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import SubmitButton from "./components/SubmitButton";
import InputWindow from "./components/InputWindow";
import OutputWindow from "./components/OutputWindow";
import OutputDetails from "./components/OutputDetails";
import { languageOptions } from "./constants/languageOptions";

import "./App.css";

const cppDefault = `#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello World!" << endl;\n\treturn 0;\n}`;
const javaDefault = `public class HelloWorld {\n\tpublic static void main(String args[]){\n\t\tSystem.out.print("Hello World!");\n\t}\n}`;
const pythonDefault = `print("Hello World!")`;

function App() {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [code, setCode] = useState(cppDefault);
  const [customInput, setCustomInput] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [outputData, setOutputData] = useState("");
  const [processing, setProcessing] = useState(false);
  const [fontSize, setFontSize] = useState("14px");

  useEffect(() => {
    if (language.value === "cpp") {
      setCode(cppDefault);
    } else if (language.value === "java") {
      setCode(javaDefault);
    } else {
      setCode(pythonDefault);
    }
  }, [language])

  const handleSubmit = () => {
    setProcessing(true);
    const formData = {
      script: code,
      stdin: customInput,
      language: language.languageCode,
      versionIndex: language.versionIndex,
    };

    axios
      .post("https://code-editor-server-one.vercel.app", formData)
      .then((res) => {
        console.log(res);
        setOutputData(res.data);
        setProcessing(false);
      })
      .catch((err) => {
        console.log(err);    
        setProcessing(false);
      });
  };

  return (
    <div className="min-w-[768px]">
      <Navbar
        setUserLang={setLanguage}
        setUserTheme={setTheme}
        setUserFontSize={setFontSize}
      />
      <div>
        <div>
          <div className="px-4 gap-4 flex flex-col justify-between md:flex-row">
            <CodeEditor
              language={language.value}
              theme={theme}
              code={code}
              onEditorChange={setCode}
              fontSize={fontSize}
            />

            <div className="mb-4 w-full md:w-[50%]">
              <OutputWindow outputData={outputData} />
              <InputWindow
                customInput={customInput}
                setCustomInput={setCustomInput}
              />
              <SubmitButton
                handleSubmit={handleSubmit}
                processing={processing}
              />

              {outputData && outputData.cpuTime && outputData.memory && (
                <OutputDetails
                  cpuTime={outputData.cpuTime}
                  memory={outputData.memory}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

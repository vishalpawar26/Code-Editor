import React from "react";

const OutputWindow = ({outputData}) => {
  let textColor = "";
  if (outputData.cpuTime === null && outputData.memory === null) {
    textColor = "text-red-500";
  }
  else {
    textColor = "text-white";
  }

  let output = "";
  if (outputData && outputData.output.includes("output Limit reached")) {
    output = "Time Limit Exceeded";
  }
  else {
    output = outputData.output;
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Output</h2>
      <textarea
        rows="8"
        value={output}
        disabled
        className={`px-4 py-2 w-full rounded-md bg-gray-800 ${textColor}`}
      ></textarea>
    </>
  );
};

export default OutputWindow;

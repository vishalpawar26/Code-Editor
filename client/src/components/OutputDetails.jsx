import React from "react";

const OutputDetails = ({ cpuTime, memory }) => {
  return (
    <div className="mt-4">
      <p>
        CPU Time:{" "}
        <span className="font-bold">{cpuTime}</span>
      </p>
      <p>
        Memory:{" "}
        <span className="font-bold">{memory}</span>
      </p>
    </div>
  );
};

export default OutputDetails;

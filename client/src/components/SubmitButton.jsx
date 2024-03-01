import React from "react";

const SubmitButton = ({handleSubmit, processing}) => {
  return (
    <div className="w-full flex justify-end">
      <button
        onClick={handleSubmit}
        className="px-4 py-2 border-black border-2 rounded-md shadow-[5px_5px_0px_rgb(0,0,0)] transition hover:shadow-none"
      >
        {processing ? "Processing..." : "Compile & Execute"}
      </button>
    </div>
  );
};

export default SubmitButton;

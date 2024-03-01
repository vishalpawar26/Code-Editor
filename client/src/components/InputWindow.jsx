import React from "react";

const InputWindow = ({customInput, setCustomInput}) => {
  return (
    <>
      <textarea
        rows="5"
        placeholder="Custom Input"
        value={customInput}
        onChange={e => setCustomInput(e.target.value)}
        className="px-4 py-2 my-2 w-full focus:outline-none border-2 border-black rounded-md shadow-[5px_5px_0px_rgb(0,0,0)] transition duration-200 hover:shadow-none"
      ></textarea>
    </>
  );
};

export default InputWindow;

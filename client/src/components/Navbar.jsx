import React from "react";
import Select from "react-select";
import { languageOptions } from "../constants/languageOptions";
import { customStyles } from "../constants/customeStyles";
import "../App.css";

const Navbar = ({ setUserLang, setUserTheme, setUserFontSize }) => {
  const themes = [
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
  ];

  const fontSizes = [
    {value: "14px", label: "14px"},
    {value: "16px", label: "16px"},
    {value: "18px", label: "18px"},
    {value: "20px", label: "20px"},
    {value: "22px", label: "22px"},
    {value: "24px", label: "24px"},
  ]

  return (
    <div className="py-4 px-4 flex gap-4">
      <Select
        options={languageOptions}
        defaultValue={languageOptions[0]}
        onChange={(e) => setUserLang(e)}
        styles={customStyles}
      />
      <Select
        options={themes}
        placeholder="Select Theme"
        onChange={(e) => setUserTheme(e.value)}
        styles={customStyles}
      />
      <Select
        options={fontSizes}
        placeholder="Select Font Size"
        onChange={(e) => setUserFontSize(e.value)}
        styles={customStyles}
      />
    </div>
  );
};

export default Navbar;

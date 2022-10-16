import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { SiWritedotas } from "react-icons/si";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <SiWritedotas size={50} color={`${darkMode ? "white" : "black"}`} />
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        {darkMode ? <BiSun size={30} color="yellow" /> : <BiMoon size={30} />}
      </button>
    </div>
  );
};

export default Header;

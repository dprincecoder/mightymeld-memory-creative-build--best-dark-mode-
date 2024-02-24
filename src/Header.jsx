/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDarkMmode } from "./ContextApi";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMmode();
  const [isSystemPreference, setIsSystemPreference] = useState(false);
  const systemPreference =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  useEffect(() => {
    if (systemPreference) {
      setIsSystemPreference(true);
    }
    if (systemPreference !== isDarkMode) {
      toggleDarkMode();
    }
  }, [isSystemPreference, systemPreference]);

  const handleToggle = () => {
    toggleDarkMode();
  };
  return (
    <div
      className="h-40px py-6 px-6 w-full shadow-lg flex justify-between items-center bg-[var(--navbar-bg)]"
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <h1 className="font-bold text-[26px] tracking-widest text-[var(--text-color)]">
        MightyMeld
      </h1>
      <div className="bg-gray-300 w-[75px] h-8 rounded-full cursor-pointer group/item">
        <p className="text-white invisible group-hover/item:visible top-[70px] absolute right-1 bg-zinc-600 rounded-[5px] py-1 px-2">
          Switch between light and dark mode (currently{" "}
          {isDarkMode ? "dark" : "light"} mode)
        </p>
        <label
          htmlFor="darkmodebtn"
          className="w-full h-full cursor-pointer relative"
        >
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
            id="darkmodebtn"
            className="hidden sr-only peer"
          />
          <span className="w-[30px] h-[28px] bg-pink-100 absolute rounded-full top-[2px] left-1 peer-checked:bg-pink-500 peer-checked:left-10"></span>
        </label>
      </div>
    </div>
  );
};

export default Header;

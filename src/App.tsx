import React, { useEffect, useState } from "react";
import classnames from "classnames";
import Switch from "./components/Switch";
import Screen from "./components/Screen";
import KeyPad from "./components/KeyPad";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [result, setResult] = useState<string>("");
  // const [theme, setTheme] = useState(1);
  const [theme, setTheme] = useLocalStorage("calc-theme", 1);

  const THEME = new Map();
  THEME.set(1, "theme-one");
  THEME.set(2, "theme-two");
  THEME.set(3, "theme-three");

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const handleBtnClick = (value: number | string) => {
    if (result.length >= 21) return;
    setResult(result + value);
  };
  const handleEqualClick = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult("Error");
    }
  };

  const handleDel = () => {
    setResult(result.substring(0, result.length - 1));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let theme = parseInt(e.target.value);
    setTheme(theme);
  };

  return (
    <div
      className={classnames(
        `max-w-7xl mx-auto text-key  flex justify-center md:items-center bg-bg min-h-screen`,
        THEME.get(theme)
      )}
    >
      <div className=" w-[400px] mx-4 my-8">
        <div className="flex justify-between items-center">
          <h1
            className={classnames(
              "text-lg",
              theme === 2 || theme === 3
                ? "text-textPrimary"
                : " text-textSecondary "
            )}
          >
            Calc
          </h1>
          <div className="flex justify-center items-center gap-4">
            <h2
              className={classnames(
                "uppercase text-[10px] tracking-widest",
                theme === 2 || theme === 3
                  ? "text-textPrimary"
                  : " text-textSecondary "
              )}
            >
              theme
            </h2>
            <Switch changeTheme={handleThemeChange} theme={theme} />
          </div>
        </div>
        <Screen theme={theme} result={result} />
        <KeyPad
          handleBtnClick={handleBtnClick}
          handleEqualClick={handleEqualClick}
          handleClear={handleClear}
          handleDel={handleDel}
        />
      </div>
    </div>
  );
}

export default App;

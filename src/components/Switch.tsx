import classNames from "classnames";

type SwitchProps = {
  changeTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: number;
};

const Switch = ({ changeTheme, theme }: SwitchProps) => {
  return (
    <div className="relative  flex justify-between w-14 items-center bg-toggleBg rounded-xl p-1 ">
      <input
        type="checkbox"
        onChange={changeTheme}
        checked={theme === 1}
        value={1}
        className="radio-item "
        name="theme"
        id="one"
      />
      <input
        type="checkbox"
        onChange={changeTheme}
        checked={theme === 2}
        value={2}
        className="radio-item"
        name="theme"
        id="two"
      />
      <input
        type="checkbox"
        onChange={changeTheme}
        checked={theme === 3}
        value={3}
        className="radio-item"
        name="theme"
        id="three"
      />
      <div
        className={classNames(
          "absolute inset-x-0 -top-4 flex justify-around items-center text-[10px]  ",
          theme === 2 || theme === 3
            ? "text-textPrimary"
            : " text-textSecondary "
        )}
      >
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );
};

export default Switch;

import classNames from "classnames";

type ScreenProps = {
  theme: number;
  result: string;
};
const Screen = ({ theme, result }: ScreenProps) => {
  return (
    <div
      className={classNames(
        " text-center my-4 h-20 overflow-hidden rounded-lg p-4",
        theme === 2 ? "bg-textSecondary " : "bg-screenBg  ",
        theme === 1 ? "text-textSecondary" : "text-textPrimary"
      )}
    >
      <span>{result}</span>
    </div>
  );
};

export default Screen;

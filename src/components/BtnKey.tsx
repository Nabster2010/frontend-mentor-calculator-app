import classNames from "classnames";

type BtnKeyProps = {
  children: React.ReactNode;
  handleBtnClick: () => void;
  className?: string;
};

const BtnKey = ({ children, handleBtnClick, className = "" }: BtnKeyProps) => {
  return (
    <button
      type="button"
      onClick={handleBtnClick}
      className={classNames("btn", className)}
    >
      {children}
    </button>
  );
};

export default BtnKey;

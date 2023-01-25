import BtnKey from "./BtnKey";

type KeyPadProps = {
  handleEqualClick: () => void;
  handleBtnClick: (v: number | string) => void;
  handleClear: () => void;
  handleDel: () => void;
};
const KeyPad = ({
  handleEqualClick,
  handleBtnClick,
  handleClear,
  handleDel,
}: KeyPadProps) => {
  return (
    <div className="bg-toggleBg text-textPrimary align-middle rounded-lg p-4 grid grid-cols-4 grid-rows-5 gap-4 ">
      <BtnKey handleBtnClick={() => handleBtnClick(7)}>7</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(8)}>8</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(9)}>9</BtnKey>
      <BtnKey
        handleBtnClick={handleDel}
        className="main-btn shadow-mainKeyShadow text-textSecondary"
      >
        DEL
      </BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(4)}>4</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(5)}>5</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(6)}>6</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick("+")}>+</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(1)}>1</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(2)}>2</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(3)}>3</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick("-")}>-</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(".")}>.</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick(0)}>0</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick("/")}>&#47;</BtnKey>
      <BtnKey handleBtnClick={() => handleBtnClick("*")}>&times;</BtnKey>
      <BtnKey
        handleBtnClick={handleClear}
        className="main-btn col-span-2 shadow-mainKeyShadow text-textSecondary"
      >
        Reset
      </BtnKey>
      <BtnKey
        handleBtnClick={handleEqualClick}
        className="secondary-btn text-textDark col-span-2 shadow-toggleShadow"
      >
        =
      </BtnKey>
    </div>
  );
};

export default KeyPad;

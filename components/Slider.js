import { useState } from "react";

function nFormatter(num) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol
    : "0";
}

function Slider({
  Class,
  max,
  min,
  func,
  defval,
  stepSize,
  values,
  inputName,
}) {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState(0);

  const handleInput = (e) => {
    setShow(true);
    let target = e.target;
    const sliderMin = target.min;
    const sliderMax = target.max;
    const sliderVal = target.value;
    setVal(sliderVal);
    target.style.backgroundSize =
      ((sliderVal - min) * 100) / (max - min) + "% 100%";
  };

  return (
    <div className={`h-fit relative ${Class}`}>
      <input
        name={inputName ? inputName : ""}
        type="range"
        min={min ? min : 0}
        max={max ? max : 100}
        defaultValue={defval ? defval : 0}
        className="w-full h-1.5"
        onChange={func}
        onInput={handleInput}
        step={stepSize ? stepSize : 1}
      />
      {values && (
        <>
          <div className="flex justify-between text-[10px] -mt-0.5">
            <div>{min}</div>
            <div className="pl-2">{nFormatter(max)}</div>
          </div>
          <label
            htmlFor={inputName}
            className={`absolute ${
              !show && "hidden"
            } -top-4 text-[10px] rounded bg-white text-black font-bold p-0.5 text-center w-9 z-10 select-none`}
            style={{
              left: `${Number(((val - min) * 100) / (max - min))}%`,
            }}>
            {nFormatter(val)}
          </label>
        </>
      )}
    </div>
  );
}

export default Slider;

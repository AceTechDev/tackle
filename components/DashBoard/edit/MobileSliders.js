import Slider from "../../Slider";
function MobileSliders({ firstVal, setFirstVal, secVal, setSecVal }) {
  return (
    <div className="w-full md:hidden flex flex-col mb-3">
      <div className="w-full flex flex-col my-1">
        <div className="flex justify-between">
          Bonus/Point:
          <span>{firstVal}</span>
        </div>
        <Slider
          min={0}
          max={400}
          Class="my-1"
          stepSize={10}
          func={(e) => setFirstVal(e.target.value)}
        />
      </div>

      <div className="w-full flex flex-col my-1">
        <div className="flex justify-between">
          Salary/Month:
          <span>${secVal}</span>
        </div>
        <Slider
          min={0}
          max={4000}
          Class="my-1"
          stepSize={50}
          func={(e) => setSecVal(e.target.value)}
        />
      </div>
    </div>
  );
}

export default MobileSliders;

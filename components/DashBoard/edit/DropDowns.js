import BoxInput from "../BoxInput";
import React, { useEffect, useState } from "react";
import RequestsUtils from "../../../utils/RequestsUtils";

function DropDowns({
  setAge,
  setLoading,
  setNationality,
  setWeight,
  setHeight,
  setClub,
  setLeague,
  age,
  nationality,
  weight,
  height,
  club,
  league,
}) {
  const [ages, setAges] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [weights, setWeights] = useState([]);
  const [heights, setHeights] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    RequestsUtils.all().then((res) => {
      if (res.isDone) {
        setAges(res.result.ages);
        setNationalities(res.result.countries);
        setClubs(res.result.clubs);
        setWeights(res.result.weights);
        setHeights(res.result.heights);
        setLeagues(res.result.leagues);
      }
    });
  }, []);
  return (
    <div className="w-[100%]  md:flex -mt-1.5 md:mt-0 text-sm lg:text-base text-start">
      <div className="w-[100%] md:w-[50%] -mt-1.5 md:mt-0 text-sm lg:text-base text-start">
        <div className="flex flex-col justify-between md:flex-row md:my-2 ">
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 w-[100%]">
            Age: *
            <BoxInput
              OnChange={(e) =>
                setAge({
                  id: e.target.value,
                  name: `$${e.target.value}`,
                })
              }
              ContainerClass="flex-1 w-[100%] my-1.5">
              <option value="" selected disabled>
                Please select an option
              </option>
              {ages.map((e) => (
                <option
                  selected={age?.id?.toString() === e.id.toString()}
                  value={e.id}>
                  {e.name}
                </option>
              ))}
            </BoxInput>
          </div>
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 md:ml-4 w-[100%]">
            Nationality: *
            <BoxInput
              OnChange={(e) =>
                setNationality({
                  id: e.target.value,
                  name: `Country #${e.target.value}`,
                })
              }
              ContainerClass="flex-1 w-[100%] my-1.5">
              <option value="" selected disabled>
                Please select an option
              </option>
              {nationalities.map((e) => (
                <option
                  selected={nationality?.id?.toString() === e.id.toString()}
                  value={e.id}>
                  {e.name}
                </option>
              ))}
            </BoxInput>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row md:my-6">
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 w-[100%]">
            Weight: *
            <BoxInput
              OnChange={(e) =>
                setWeight({
                  id: e.target.value,
                  name: `$${e.target.value}`,
                })
              }
              ContainerClass="flex-1  w-[100%] my-1.5">
              <option value="" selected disabled>
                Please select an option
              </option>

              {weights.map((e) => (
                <option
                  selected={weight?.id?.toString() === e.id.toString()}
                  value={e.id}>
                  {e.name}
                </option>
              ))}
            </BoxInput>
          </div>
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 md:ml-4 w-[100%]">
            Height: *
            <BoxInput
              OnChange={(e) =>
                setHeight({
                  id: e.target.value,
                  name: `$${e.target.value}`,
                })
              }
              ContainerClass="flex-1 w-[100%] my-1.5">
              <option value="" selected disabled>
                Please select an option
              </option>

              {heights.map((e) => (
                <option
                  selected={height?.id?.toString() === e.id.toString()}
                  value={e.id}>
                  {e.name}
                </option>
              ))}
            </BoxInput>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[50%] -mt-1.5 md:mt-0 text-sm lg:text-base text-start">
        <div className="flex flex-col justify-between md:flex-row md:my-2 md:ml-4 ">
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 w-[100%]">
            Last Club: *
            <BoxInput
              OnChange={(e) =>
                setClub({
                  id: e.target.value,
                  name: `Club #$${e.target.value}`,
                })
              }
              ContainerClass="flex-1 w-[100%] my-1.5">
              <option value="" selected disabled>
                Please select an option
              </option>

              {clubs.map((e) => (
                <option
                  selected={club?.id?.toString() === e.id.toString()}
                  value={e.id}>
                  {e.name}
                </option>
              ))}
            </BoxInput>
          </div>
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 md:ml-4 w-[100%]">
            Last League: *
            <BoxInput
              OnChange={(e) =>
                setLeague({
                  id: e.target.value,
                  name: `League #$${e.target.value}`,
                })
              }
              ContainerClass="flex-1 w-[100%] my-1.5">
              <option value="" selected disabled>
                Please select an option
              </option>

              {leagues.map((e) => (
                <option
                  selected={league?.id?.toString() === e.id.toString()}
                  value={e.id}>
                  {e.name}
                </option>
              ))}
            </BoxInput>
          </div>
        </div>
        <div className="flex flex-col justify-between md:flex-row md:my-6 md:ml-4 ">
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 w-[100%]">
            Desired Payment: *
            <BoxInput ContainerClass="flex-1  w-[100%] my-1.5">
              <option value="" selected disabled>
                There is no option to select
              </option>
            </BoxInput>
          </div>
          <div className="flex flex-col md:flex-column my-1.5 md:my-3 md:ml-4 w-[100%]">
            Desired League: *
            <BoxInput ContainerClass="flex-1 w-[100%] my-1.5">
              <option value="" selected disabled>
                There is no option to select
              </option>
            </BoxInput>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDowns;

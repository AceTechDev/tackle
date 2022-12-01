import Image from "next/image";
import Information from "../DashBoard/Information";
import React from "react";

function TextPlayerInfo({ player }) {
  return (
    <div className="flex flex-col w-full md:mr-8 lg:mr-12 xl:mr-14 mt-4 sm:mt-0 max-w-[300px] sm:max-w-none m-auto">
      <div className="flex justify-between text-sm sm:mb-2 md:mb-4 sm:text-base">
        <div>
          <span className="mr-1">{player.nationality?.name}</span>
        </div>
        <div className="text-[#f1c224] mx-1 sm:mx-10">{player.weight} lbs</div>
        <div className="text-[#f1c224]">{player.height} cm</div>
      </div>
      <Information
        text1="Position:"
        text2={player.positions.join(", ")}
        Class="mt-2"
      />
      <svg
        className="mt-[.6em] mb-[.6em] w-full sm:w-[258px]"
        width="250"
        height="157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 370 232">
        <rect
          x="0.99"
          y="0.99"
          width="364.48"
          height="230.02"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2.5"
        />
        <line
          x1="183.89"
          y1="3.95"
          x2="183.89"
          y2="232"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2"
        />
        <rect
          x="0.66"
          y="73.16"
          width="40.86"
          height="85.68"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2"
        />
        <rect
          x="323.61"
          y="73.16"
          width="40.86"
          height="85.68"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2"
        />
        <rect
          x="0.66"
          y="95.57"
          width="13.18"
          height="40.86"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2"
        />
        <rect
          x="351.3"
          y="95.57"
          width="13.18"
          height="40.86"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2"
        />
        <path
          d="M112.76,59A37.57,37.57,0,1,1,75.19,21.42,37.57,37.57,0,0,1,112.76,59Z"
          transform="translate(106.72 57.01)"
          fill="none"
          stroke="#0873f1"
          strokeWidth="2"
        />
        {player.positions.includes("GK") ? (
          <circle
            cx="19.77"
            cy="117.32"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("RB") ? (
          <circle
            cx="81.73"
            cy="203"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("CDM") ? (
          <circle
            cx="159.5"
            cy="116"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("CAM") ? (
          <circle
            cx="238.59"
            cy="116"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("ST") ? (
          <circle
            cx="333.5"
            cy="116"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("CF") ? (
          <circle
            cx="296.59"
            cy="116"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("RCM") ? (
          <circle
            cx="185.86"
            cy="152.91"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}

        {player.positions.includes("RW") ? (
          <circle
            cx="308.45"
            cy="199.04"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("RM") ? (
          <circle
            cx="195.09"
            cy="214.86"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("RM") ? (
          <circle
            cx="195.09"
            cy="214.86"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("LM") ? (
          <circle
            cx="195.09"
            cy="21.09"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("LCM") ? (
          <circle
            cx="185.86"
            cy="77.77"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("LW") ? (
          <circle
            cx="308.45"
            cy="34.27"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("RCB") ? (
          <circle
            cx="58"
            cy="145"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}

        {player.positions.includes("LCB") ? (
          <circle
            cx="58"
            cy="87"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
        {player.positions.includes("LB") ? (
          <circle
            cx="81.73"
            cy="29"
            r="12.25"
            fill="#F4C228"
            stroke="#fff"
            strokeWidth="1.32"
          />
        ) : (
          ""
        )}
      </svg>
      <Information
        text1="Last Club:"
        text2={player.club.name}
        Class="mt-2.5 sm:mt-0">
        <div className="mr-1 mt-1.5">
          <Image
            src={player.club.logo}
            alt="Club Icon"
            width={16}
            height={16}
          />
        </div>
      </Information>
      <Information
        text1="Last Legue:"
        text2={player.league.name}
        className="w-full"
      />
      <Information text1="Desired League:" text2={player.league.name} />
      <Information text1="Desired Payment:" text2={2700} />
    </div>
  );
}

export default TextPlayerInfo;

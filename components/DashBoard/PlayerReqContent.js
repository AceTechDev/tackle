import Image from "next/image";
import React from "react";

function PlayerReqContent({request}) {
  return (
    <>
      {/* for big screens */}
      <div className="wide_screen_content_club">
        <div className="w-6 lg:w-[30px] h-6 lg:h-[30px]">
          <Image src={request.clubLogo} width={30} height={30} alt="icon" />
        </div>
        <div className="ml-2 font-medium md:text-base lg:text-lg">
            {request.clubName}
        </div>
      </div>
      <div className="wide_screen_content_text">
          {`${request.leagueName} / ${request.countryName} / ${request.managerName}`}
      </div>
      {/* for small screens */}
      <div className="flex flex-col md:hidden">
        <div className="small_screen_content_club">
          <div className="w-5 sm:w-6 lg:w-[30px] h-5 sm:h-6 lg:h-[30px]">
            <Image src={request.clubLogo} width={30} height={30} alt="icon" />
          </div>
          <div className="ml-2 text-sm font-medium sm:text-base lg:text-lg">
              {request.clubName}
          </div>
        </div>
        <div className="small_screen_content_text">
            {`${request.leagueName} / ${request.countryName} / ${request.managerName}`}
        </div>
      </div>
    </>
  );
}

export default PlayerReqContent;

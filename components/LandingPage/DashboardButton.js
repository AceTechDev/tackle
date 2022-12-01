import React from "react";
import Router from "next/router";

function Buttons({ Handler }) {
  const goToDashboard = () => {
    Router.push({
      pathname: "/dashboard",
    });
  };
  return (
    <div className="absolute flex flex-col justify-center items-center h-fit w-fit top-[calc(50%-18px)] sm:top-[calc(50%-20px)] left-[calc(50%-90px)] sm:left-[calc(50%-120px)] sm:scale-[.7] md:scale-75 lg:scale-90 xl:scale-100">
      <button
        onClick={() => goToDashboard()}
        type="button"
        className="btn continue-button">
        Continue to dashboard
      </button>
    </div>
  );
}

export default Buttons;

import React from "react";
import { BallTriangle } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MyLoader = () => {
  return (
    <div
      className="text-center"
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "80vh",
      }}>
      <BallTriangle
        type="Puff"
        color="#f1c224"
        height={75}
        width={75}
        timeout={3000}
      />
    </div>
  );
};

export const FlexibleLoader = () => {
  return <BallTriangle color="#0026fe" height={75} width={75} timeout={3000} />;
};

export default MyLoader;

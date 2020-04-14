import React from "react";

export default () => {
  return (
    <div
      className="spinner-grow"
      style={{
        width: "10rem",
        height: "10rem",
        color: "#b030b0",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

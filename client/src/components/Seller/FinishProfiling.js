import React from "react";

const FinishProfiling = () => {
  return (
    <div
      style={{
        height: "50vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="container"
    >
      <div className="box-container p-4">
        <h3>
          You have successfully completed the seller profiling! Please wait for
          the admin to approve your request.
        </h3>
      </div>
    </div>
  );
};

export default FinishProfiling;

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
    >
      <div className="box-container">
        <h6>
          You have successfully completed the seller profiling! Please wait for
          the admin to approve your request.
        </h6>
      </div>
    </div>
  );
};

export default FinishProfiling;

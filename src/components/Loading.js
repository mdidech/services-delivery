import React from "react";

const Loading = () => {
  return (
    <div
      className='spinner-border text-warning mx-auto p-5'
      role='status'
      style={{ width: "5rem", height: "5rem" }}
    >
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

export default Loading;

import React from "react";

export function Image({ data }) {
  console.log("data", data);
  return (
    <div
      style={{
        width: 100 + "px",
        height: 100 + "px",
      }}
    >
      <img
        style={{
          width: 100 + "px",
          height: 100 + "px",
        }}
        src={data.url}
        alt=""
      />
    </div>
  );
}

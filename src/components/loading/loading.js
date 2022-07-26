import React from "react";
import { BeatLoader } from "react-spinners";

export function Loading() {
  return (
    <BeatLoader
      cssOverride={{
        alignSelf: "center",
      }}
      loading
      margin={10}
      size={20}
    />
  );
}

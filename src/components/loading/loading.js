import React from "react";
import styles from "./styles/loading.module.scss.css";
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

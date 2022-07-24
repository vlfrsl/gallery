import React from "react";
import styles from "./styles/image.module.scss";

export function Image({ data }) {
  // console.log("data", data);
  return (
    <div className={styles.imageWrapper}>
      <img src={data.url} alt="" />
      <div className={styles.overlay}></div>
    </div>
  );
}

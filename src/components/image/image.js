import React from "react";
import styles from "./styles/image.module.scss";
import { Link } from "react-router-dom";

export function Image({ data }) {
  // console.log("data", data);
  return (
    <div className={styles.imageWrapper}>
      <img src={data.url} alt="" />
      <div className={styles.overlay}>
        <Link className={styles.link} to="/image">
          <button>GO to image</button>
          {/*<div className={styles.btnWrapper}>*/}
          {/*  <span className={styles.btn}>GO to Photo</span>*/}
          {/*</div>*/}
        </Link>
      </div>
    </div>
  );
}

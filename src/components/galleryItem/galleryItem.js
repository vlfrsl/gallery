import React from "react";
import styles from "./styles/item.module.scss";
import { Image } from "../image/image";

export function GalleryItem({ data }) {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.imageBlock}>
        <Image data={data} />
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.name}>
          <span>Name:</span>
          <span>image name</span>
        </div>
        <div className={styles.date}>
          <span>Date:</span>
          <span>24.04.2022</span>
        </div>
      </div>
    </div>
  );
}

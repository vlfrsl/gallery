import React from "react";
import styles from "./styles/item.module.scss";
import { Image } from "../image/image";

export function GalleryItem({ data }) {
  const imageName = data.description || "No name";
  const author = data.user.name || "No info";
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.imageBlock}>
        <Image data={data} />
      </div>

      <div className={styles.infoBlock}>
        <div className={styles.name}>
          <span>Name:</span>
          <span>{imageName}</span>
        </div>
        <div className={styles.date}>
          <span>Author:</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

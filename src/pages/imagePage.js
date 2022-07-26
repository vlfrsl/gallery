import React from "react";
import styles from "./styles/pages.module.scss";
import { FullSizeImage } from "../components/fullSizeImage/fullSizeImage";
import { SizeBar } from "../components/imageSizeBar/sizeBar";

export function ImagePage() {
  return (
    <div className={styles.pageImageWrapper}>
      <SizeBar />
      <FullSizeImage />
    </div>
  );
}

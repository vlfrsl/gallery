import React from "react";
import { FullSizeImage } from "../fullSizeImage/fullSizeImage";
import styles from "./styles/pages.module.scss";
import { Header } from "../header/header";
import { Gallery } from "../components/gallery/gallery";
import { SizeBar } from "../components/imageSizeBar/sizeBar";

export function ImagePage() {
  return (
    // <>
    //   <FullSizeImage />
    // </>

    <div className={styles.pageImageWrapper}>
      <SizeBar />
      <FullSizeImage />
    </div>
  );
}

import React from "react";
import { Gallery } from "../components/gallery/gallery";
import { Header } from "../header/header";

import styles from "./styles/pages.module.scss";

export function GalleryPage() {
  return (
    <div className={styles.pageGalleryWrapper}>
      <Header />
      <Gallery />
    </div>
  );
}

import React from "react";
import styles from "./styles/pages.module.scss";
import { Gallery } from "../components/gallery/gallery";
import { Header } from "../components/header/header";

export function GalleryPage() {
  return (
    <div className={styles.pageGalleryWrapper}>
      <Header />
      <Gallery />
    </div>
  );
}

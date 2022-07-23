import React from "react";
import styles from "./styles/app.module.scss";
import { Route, Routes } from "react-router-dom";

import { GalleryPage } from "../pages/galleryPage";
import { ImagePage } from "../pages/imagePage";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="image" element={<ImagePage />} />
      </Routes>
    </div>
  );
}

export default App;

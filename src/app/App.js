import React, { useState } from "react";
import styles from "./styles/app.module.scss";
import { Route, Routes } from "react-router-dom";

import { GalleryPage } from "../pages/galleryPage";
import { ImagePage } from "../pages/imagePage";
import { useEffect } from "react";
import { getImages } from "../slices/gallerySlice";
import { useDispatch } from "react-redux";
import { WrapperPage } from "../pages/wrapperPage";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <Routes>
        <Route path="/" element={<WrapperPage />}>
          <Route index element={<GalleryPage />} />
          <Route path="/image" element={<ImagePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

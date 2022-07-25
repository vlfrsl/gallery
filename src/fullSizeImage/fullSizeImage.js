import React, { useEffect } from "react";
import styles from "./styles/fullImageStyles.module.scss";
import { useQuery } from "../hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../slices/gallerySlice";
import { SizeBar } from "../components/imageSizeBar/sizeBar";

export function FullSizeImage() {
  const query = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImage(query.get("id")));
  }, []);

  const status = useSelector((state) => state.gallery.status);
  const sizeSelected = useSelector((state) => state.gallery.currentSize);

  const selectedImage = useSelector((state) => state.gallery.chosenImage);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.imageWindowWrapper}>
        {status === "loading" && (
          <div
            style={{
              width: 100 + "%",
            }}
          >
            <h1>Loading</h1>
          </div>
        )}

        {Object.keys(selectedImage).length > 0 && status !== "loading" && (
          <div className={styles.imageWindow}>
            <img src={selectedImage.urls[sizeSelected]} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

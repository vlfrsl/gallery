import React, { useEffect } from "react";
import styles from "./styles/fullImageStyles.module.scss";
import { useQuery } from "../../hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../loading/loading";
import { Error } from "../errorComponent/error";
import {
  getImage,
  selectChosenImage,
  selectCurrentSize,
  selectStatus,
} from "../../slices/gallerySlice";

export function FullSizeImage() {
  const query = useQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImage(query.get("id")));
  }, []);

  const status = useSelector(selectStatus);
  const sizeSelected = useSelector(selectCurrentSize);

  const selectedImage = useSelector(selectChosenImage);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.imageWindowWrapper}>
        {status === "loading" && <Loading />}
        {status === "failed" && <Error />}

        {Object.keys(selectedImage).length > 0 && status === "idle" && (
          <div className={styles.imageWindow}>
            <img src={selectedImage.urls[sizeSelected]} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./styles/gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "../image/image";
import { getImages } from "../../slices/gallerySlice";
import { GalleryItem } from "../galleryItem/galleryItem";

export function Gallery() {
  const dispatch = useDispatch();

  const images = useSelector((state) => state.gallery.images);
  const loading = useSelector((state) => state.gallery.status);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [trackScroll, setTrackScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(getImages(10, page));
      setPage(page + 1);
      setFetching(false);
    }
    setTrackScroll(true);
  }, [fetching]);

  const scrollHandler = (e) => {
    if (trackScroll) {
      if (
        e.target.documentElement.scrollHeight -
          (e.target.documentElement.scrollTop + window.innerHeight) <
        100
      ) {
        setTrackScroll(false);
        setFetching(true);
      }
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.items}>
        {images.map((image, idx) => {
          return <GalleryItem key={idx} data={image} />;
        })}
      </div>
      {loading === "loading" && (
        <div
          style={{
            background: "green",
            // height: 100 + "vh",
          }}
        >
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}

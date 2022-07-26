import React, { useEffect, useState } from "react";
import styles from "./styles/gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../slices/gallerySlice";
import { GalleryItem } from "../galleryItem/galleryItem";
import { Loading } from "../loading/loading";
import { Error } from "../errorComponent/error";

export function Gallery() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const images = useSelector((state) => state.gallery.images);
  const loading = useSelector((state) => state.gallery.status);

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      dispatch(getImages({ limit: 10, page: page }))
        .unwrap()
        .then(() => {
          setFetching(false);
          setPage(page + 1);
        });
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <div className={styles.gallery}>
      {loading === "failed" && <Error />}

      <div className={styles.items}>
        {images.map((image, idx) => {
          return <GalleryItem key={idx} data={image} />;
        })}
      </div>

      {loading === "loading" && <Loading />}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../../slices/gallerySlice";
import { Image } from "../image/image";

export function Gallery() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [fetching, setFetcing] = useState(false);

  const images = useSelector((state) => state.gallery.images);
  const loading = useSelector((state) => state.gallery.status);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      console.log("fetche");
      setFetcing(false);
      dispatch(getImages(10, page));
      setPage(page + 1);
    }
  }, [fetching]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetcing(true);
    }
  };

  if (loading === "loading") {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }

  if (loading === "idle") {
    return (
      <div>
        {images.map((image) => {
          return <Image data={image} />;
        })}
      </div>
    );
  }
}

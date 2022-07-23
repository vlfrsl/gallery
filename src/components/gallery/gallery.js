import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "../../slices/gallerySlice";

export function Gallery() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return <div></div>;
}

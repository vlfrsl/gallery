import React from "react";
import { Outlet } from "react-router-dom";
import { Gallery } from "../components/gallery/gallery";
import { useDispatch } from "react-redux";
import { getImages } from "../slices/gallerySlice";
import { useEffect } from "react";

export function GalleryPage() {
  return (
    // <div>
    <Gallery />
    // </div>
  );
}

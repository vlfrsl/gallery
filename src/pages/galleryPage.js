import React from "react";
import { Outlet } from "react-router-dom";
import { Gallery } from "../components/gallery/gallery";

export function GalleryPage() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

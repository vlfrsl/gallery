import React from "react";
import { Outlet } from "react-router-dom";

export function ImagePage() {
  return (
    <div>
      <h1>Image Page</h1>
      <Outlet />
    </div>
  );
}

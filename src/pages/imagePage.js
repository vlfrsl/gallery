import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function ImagePage() {
  // const query = useQuery();
  // console.log(query.get("id"));

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));

  return (
    <div>
      <h1>Image Page</h1>
      <Outlet />
    </div>
  );
}

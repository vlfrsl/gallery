import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles/pages.module.scss";

export function WrapperPage() {
  return (
    <div className={styles.pageWrapper}>
      <Outlet />
    </div>
  );
}

import React from "react";
import styles from "./styles/error.module.scss";

export function Error() {
  return (
    <div className={styles.errorContainer}>
      <span>Something went wrong. Try again later.</span>
    </div>
  );
}

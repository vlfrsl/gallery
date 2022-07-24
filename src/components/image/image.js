import React from "react";
import styles from "./styles/image.module.scss";
import { useNavigate } from "react-router-dom";

export function Image({ data }) {
  const navigate = useNavigate();

  const goToImage = (id) =>
    navigate({
      pathname: "/image",
      search: `?id=${id}`,
    });

  return (
    <div className={styles.imageWrapper} onClick={() => goToImage(data.id)}>
      <img src={data.url} alt="" />
      <div className={styles.overlay}>
        <div className={styles.textWrapper}>
          <span>Go to image</span>
        </div>
      </div>
    </div>
  );
}

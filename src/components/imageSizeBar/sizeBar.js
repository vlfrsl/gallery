import React, { useState } from "react";
import styles from "./styles/sizeBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function SizeBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sizes = useSelector((state) => state.gallery.chosenImageSizes);
  const currentSize = useSelector((state) => state.gallery.currentSize);

  const [sizeChosen, setSizeChosen] = useState(currentSize);
  return (
    <div className={styles.sizeBar}>
      <div className={styles.backBtn}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
      <div className={styles.sizeSelectorWrapper}>
        <select
          value={sizeChosen}
          onChange={(e) => {
            setSizeChosen(e.target.value);
          }}
        >
          {sizes.map((val, idx) => {
            return (
              <option key={idx} value={val}>
                {val}
              </option>
            );
          })}
        </select>

        <div className={styles.setSize}>
          <button
            onClick={() => {
              dispatch({
                type: "gallery/setCurrentSize",
                payload: sizeChosen,
              });
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./styles/header.module.scss";

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.greetings}>
        <div>
          <h2>Hello, QuliSoft Team</h2>
        </div>

        <div>
          <h3>I want to show you my implementation of test task</h3>
        </div>

        <div>
          <span>
            You can get acquainted with development process on
            <a
              rel="noreferrer"
              href="https://github.com/VladislavRyabichenko/gallery"
              target="_blank"
            >
              Github
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

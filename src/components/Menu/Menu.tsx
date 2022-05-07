import { useState, useEffect } from "react";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import styles from "./Menu.module.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      setPath(window.location.pathname.slice(1));
    }
  }, []);

  if (isOpen) {
    return (
      <DialogOverlay className={styles.overlay}>
        <DialogContent as="nav" className={styles.navbar} aria-label="Menu">
          <a className={path === "" ? styles.active : ""} href="/">
            Home
          </a>
          <a
            className={path === "portfolio" ? styles.active : ""}
            href="/portfolio"
          >
            Portfolio
          </a>
          <a className={path === "posts" ? styles.active : ""} href="/posts">
            Articles
          </a>
          <a className={path === "about" ? styles.active : ""} href="/about">
            About Me
          </a>
        </DialogContent>
        <button
          className={`${styles.btn} ${styles.close}`}
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className={styles.visuallyHidden}>Close</span>
        </button>
      </DialogOverlay>
    );
  }

  return (
    <button
      className={`${styles.btn} ${styles.open}`}
      onClick={() => setIsOpen(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <span className={styles.visuallyHidden}>Open Menu</span>
    </button>
  );
};

export default Menu;

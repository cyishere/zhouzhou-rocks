import type { FunctionComponent, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonLinkProps {
  link: string;
  children: ReactNode;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ link, children }) => (
  <a className={styles.btn} href={link}>
    {children}
  </a>
);

export default ButtonLink;

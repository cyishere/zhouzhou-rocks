import type { FunctionComponent, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonLinkProps {
  link: string;
  icon?: boolean;
  children: ReactNode;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  link,
  children,
  icon = false,
}) => {
  const target = link.startsWith("http") ? "_blank" : "_self";

  return (
    <a
      className={icon ? `${styles.btn} ${styles.iconBtn}` : styles.btn}
      href={link}
      target={target}
    >
      {children}
    </a>
  );
};

export default ButtonLink;

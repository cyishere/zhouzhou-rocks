import type { FunctionComponent } from "react";

import styles from "./Card.module.css";
import type { PostMeta } from "@utils/types";
import formatDate from "@utils/formatDate";

const Card: FunctionComponent<PostMeta> = ({
  date,
  title,
  excerpt,
  link,
  cover,
  coverAlt,
}) => {
  return (
    <a className={styles.link} href={link}>
      <article className={styles.card}>
        <div className={styles.body}>
          <p className={styles.date}>{formatDate(date)}</p>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.excerpt}>{excerpt}</p>
          <p className={styles.more}>
            Read more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </div>
        {cover ? (
          <img
            src={cover}
            alt={coverAlt ? coverAlt : ""}
            className={styles.img}
          />
        ) : null}
      </article>
    </a>
  );
};

export default Card;

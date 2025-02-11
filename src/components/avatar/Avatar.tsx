import React from "react";
import styles from "./Avatar.module.scss";

type AvatarProps = {
  src: string;
  alt: string;
  isRound?: boolean;
  withBorder?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt, isRound = false, withBorder = false }) => {
  return (
    <div
      className={`${styles.avatarContainer} ${isRound ? styles.round : ""} ${
        withBorder ? styles.border : ""
      }`}
    >
      <img src={src} alt={alt} className={styles.image} />
      {withBorder && <span className={styles.borderLabel}>&lt;/&gt;</span>}
    </div>
  );
};

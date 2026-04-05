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
    <div className={styles.avatarWrapper}>
  {withBorder && (
    <svg className={styles.borderSvg} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="48"
        className={styles.borderCircle}
      />
    </svg>
  )}

  <div className={styles.avatarContainer}>
    <img src={src} alt={alt} className={styles.image} />
  </div>

  {withBorder && (
    <span className={styles.borderLabel}>&lt;/&gt;</span>
  )}
</div>
  );
};

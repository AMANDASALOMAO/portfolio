import React from 'react';
import styles from './Card.module.scss';

type CardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
  
};

export const Card: React.FC<CardProps> = ({ image, title, description, link }) => {
  const handleClick = () => {
    window.open(link, '_blank')
  }
  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

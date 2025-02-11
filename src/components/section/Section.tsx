import React, { ReactNode, CSSProperties } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
  height: string;
  flexDirection?: 'column' | 'row';
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  height, 
  flexDirection = 'column', 
  className 
}) => {
  const sectionStyle: CSSProperties = {
    height,
    display: 'flex',
    flexDirection,
  };

  const combinedClasses = `${styles.container} ${className || ''}`.trim();

  return (
    <div 
      className={combinedClasses} 
      style={sectionStyle}
    >
      {children}
    </div>
  );
};

export default Section;

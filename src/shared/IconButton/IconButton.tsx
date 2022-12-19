import React, { useCallback } from 'react';
import styles from './IconButton.module.css';

enum IconButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

interface IconButtonProps {
  onClick: (e: React.SyntheticEvent) => void;
  image: string;
  alt?: string;
  type?: IconButtonType;
  className?: string;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  image,
  alt = '',
  className,
  disabled,
  type = IconButtonType.SUBMIT,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.iconButton} ${className} ${disabled ? styles.disabled : ''}`}
    >
      <img role={'button'} className={`${styles.iconButtonImage}`} src={image} alt={alt} />
    </button>
  );
};

export default IconButton;

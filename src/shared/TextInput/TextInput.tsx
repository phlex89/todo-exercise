import React, { useCallback, useDeferredValue } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder = '' }) => {
  const defferredVal = useDeferredValue(value);

  return <input className={styles.input} placeholder={placeholder} type={'text'} value={defferredVal} onChange={onChange} />;
};

export default TextInput;

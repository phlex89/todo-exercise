import React, { useCallback, useDeferredValue } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  const defferredVal = useDeferredValue(value);

  return <input className={styles.input} type={'text'} value={defferredVal} onChange={onChange} />;
};

export default TextInput;

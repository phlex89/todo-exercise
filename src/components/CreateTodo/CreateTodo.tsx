import React, { useCallback } from 'react';
import addIcon from '../../assets/add-icon.svg';
import { useTodoContext } from '../../context/TodoContext';
import IconButton from '../../shared/IconButton/IconButton';
import TextInput from '../../shared/TextInput/TextInput';
import styles from './CreateTodo.module.css';

function CreateTodo() {
  const { addTodo } = useTodoContext();
  const [value, setValue] = React.useState<string>('');

  const updateInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    },
    [setValue],
  );

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (value) {
        addTodo(value);
        setValue('');
      }
    },
    [value, addTodo, setValue],
  );

  return (
    <form action="">
      <div className={styles.addTodoContainer}>
        <TextInput value={value} onChange={updateInput} />
        <IconButton image={addIcon} alt={'Add todo'} onClick={handleSubmit} className={styles.addTodoIcon} />
      </div>
    </form>
  );
}

export default CreateTodo;

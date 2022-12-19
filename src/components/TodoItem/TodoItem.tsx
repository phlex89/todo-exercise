import { useCallback, useState } from 'react';
import { Todo, TodoStatus } from '../../../types/todo.type';
import confirmIcon from '../../assets/confirm-icon.png';
import deleteIcon from '../../assets/delete-icon.svg';
import editIcon from '../../assets/edit-icon.svg';
import { useTodoContext } from '../../context/TodoContext';
import IconButton from '../../shared/IconButton/IconButton';
import TextInput from '../../shared/TextInput/TextInput';
import { formatDate } from '../../utils/date.utils';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { createdAt, status, title, id } = todo;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);

  const { deleteTodo, toggleTodoStatus, editTodo } = useTodoContext();

  const updateInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value);
    },
    [setValue],
  );

  const confirmEdit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (value) editTodo(id, value);
      setIsEditing(false);
    },
    [value, editTodo, setIsEditing],
  );

  return (
    <form>
      <div className={styles.todoItemContainer}>
        <input
          type={'checkbox'}
          checked={status === TodoStatus.COMPLETED}
          onChange={() => toggleTodoStatus(id)}
          className={styles.checkbox}
        />
        <div className={styles.todoItemContent}>
          {isEditing ? (
            <TextInput value={value} onChange={updateInput} />
          ) : (
            <span
              className={styles.title}
              style={{ textDecoration: status === TodoStatus.COMPLETED ? 'line-through' : 'none' }}
            >
              {title}
            </span>
          )}
          <span className={styles.date}>{formatDate(createdAt)}</span>
        </div>
        <div className={styles.actions}>
          {isEditing && <IconButton image={confirmIcon} alt={'Confirm todo'} onClick={confirmEdit} />}
          {!isEditing && (
            <IconButton
              image={editIcon}
              alt={'Edit todo'}
              onClick={() => setIsEditing(true)}
              className={`${styles.icon} ${styles.editIcon}`}
            />
          )}
          <IconButton image={deleteIcon} alt={'Delete todo'} onClick={() => deleteTodo(id)} className={styles.icon} />
        </div>
      </div>
    </form>
  );
};

export default TodoItem;

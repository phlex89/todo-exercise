import { Todo, TodoStatus } from '../../../types/todo.type';
import { useTodoContext } from '../../context/TodoContext';
import styles from './TodoItem.module.css';
import deleteIcon from '../../assets/delete-icon.svg';
import { useEffect } from 'react';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { created, status, title, id } = todo;
  const { removeTodo, toggleTodo } = useTodoContext();
  
  return (
    <div className={styles.todoItemContainer}>
      <input
        type={'checkbox'}
        checked={status === TodoStatus.COMPLETED}
        onChange={() => toggleTodo(id)}
        className={styles.checkbox}
      />
      <div className={styles.todoItemContent}>
        <span
          className={styles.title}
          style={{ textDecoration: status === TodoStatus.COMPLETED ? 'line-through' : 'none' }}
        >
          {title}
        </span>
        <span className={styles.date}>{created.toLocaleDateString()}</span>
      </div>
      <div role={'button'} onClick={() => removeTodo(id)} className={styles.deleteIcon}>
        <img src={deleteIcon} alt={'delete icon'} />
      </div>
    </div>
  );
};

export default TodoItem;

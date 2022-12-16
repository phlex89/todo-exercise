import { Todo, TodoStatus } from '../../../types/todo.type';
import { useTodoContext } from '../../context/TodoContext';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { created, status, title, id } = todo;
  const { removeTodo, toggleTodo } = useTodoContext();

  return (
    <div
      className={styles.todoItemContainer}
      style={{ backgroundColor: status === TodoStatus.COMPLETED ? 'green' : 'red' }}
    >
      <span style={{ textDecoration: status === TodoStatus.COMPLETED ? 'line-through' : 'none' }}>{title}</span>
      <button onClick={() => toggleTodo(id)}>Toggle</button>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

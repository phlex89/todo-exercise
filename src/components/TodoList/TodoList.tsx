import { useTodoContext } from '../../context/TodoContext';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function TodoList() {
  const { todos } = useTodoContext();

  console.log('todos:  ', todos);

  return (
    <div className={styles.todosContainer}>
      {todos.length > 0 ? todos.map((todo) => <TodoItem key={todo.id} todo={todo} />) : <h4>No todo found</h4>}
    </div>
  );
}

export default TodoList;

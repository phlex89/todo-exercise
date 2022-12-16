import { useTodoContext } from '../../context/TodoContext';
import styles from './CreateTodo.module.css';

function CreateTodo() {
  const { addTodo } = useTodoContext();

  return (
    <div className={styles.addTodoContainer}>
      <input className={styles.addTodo} />
      <button onClick={() => addTodo('nuovo')}>add</button>
    </div>
  );
}

export default CreateTodo;

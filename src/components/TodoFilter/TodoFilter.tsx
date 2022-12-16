import { Todo } from '../../../types/todo.type';
import styles from './TodoFilter.module.css';

interface TodoFilterProps {}

const TodoFilter: React.FC<TodoFilterProps> = () => {
  return <div className={styles.TodoFilterContainer}>Filter</div>;
};

export default TodoFilter;

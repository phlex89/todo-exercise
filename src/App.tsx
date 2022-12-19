import styles from './App.module.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.appTitle}>Todo App</h2>
      <div className={styles.toolbar}>
        <CreateTodo />
      </div>
      <TodoList />
    </div>
  );
}

export default App;

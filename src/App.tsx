import styles from './App.module.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.appTitle}>Todo App</h1>
      <div className={styles.toolbar}>
        <CreateTodo />
      </div>
      <TodoList />
    </div>
  );
}

export default App;

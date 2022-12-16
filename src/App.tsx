import styles from './App.module.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.appTitle}>TO-DO Gility</h2>
      <div className={styles.toolbar}>
        <CreateTodo />
        <TodoFilter />
      </div>
      <TodoList />
    </div>
  );
}

export default App;

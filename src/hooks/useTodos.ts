import { useState, useCallback, useEffect } from 'react';
import { Todo, TodoStatus } from '../../types/todo.type';
import { orderByPendingFirst, orderByRecentsFirst, TODOS_LOCAL_STORAGE_KEY } from '../context/todo.utils';
import { todosMock } from '../mocks/todos.mock';
import { useLocalStorage } from './useLocalStorage';

export const useTodos = () => {
  const { getItem, saveItem } = useLocalStorage<Todo[]>(TODOS_LOCAL_STORAGE_KEY);
  const savedFromLs = getItem<Todo[]>();
  console.log('savedFromLs:', savedFromLs);
  const [todos, setTodos] = useState<Todo[]>(savedFromLs || todosMock);

  useEffect(() => {
    saveItem(todos);
  }, [todos, saveItem]);

  const addTodo = (title: string) => {
    const payload: Todo = {
      id: new Date().getTime().toString(),
      createdAt: new Date(),
      status: TodoStatus.PENDING,
      title,
    };
    setTodos((prev) => [...prev, payload]);
  };

  const toggleTodoStatus = (id: string) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === TodoStatus.COMPLETED ? TodoStatus.PENDING : TodoStatus.COMPLETED,
          };
        }
        return todo;
      }),
    );
  };

  const editTodo = (id: string, newTitle: string) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: newTitle,
          };
        }
        return todo;
      }),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const getOrderedTodos = useCallback(() => {
    console.log('todos:', todos);
    return todos.sort(orderByRecentsFirst).sort(orderByPendingFirst);
  }, [todos]);

  return {
    todos: getOrderedTodos(),
    addTodo,
    toggleTodoStatus,
    editTodo,
    deleteTodo,
  };
};

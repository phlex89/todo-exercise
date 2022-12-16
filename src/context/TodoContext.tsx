import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { Todo, TodoStatus } from '../../types/todo.type';
import { todosMock } from '../mocks/todos.mock';

interface TodoContextState {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  children?: React.ReactNode;
}

const TodoContext = createContext<TodoContextState>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
  children: null,
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(todosMock);

  const addTodo = (title: string) => {
    const payload: Todo = {
      id: new Date().getTime().toString(),
      created: new Date(),
      status: TodoStatus.PENDING,
      title,
    };
    setTodos((prev) => [...prev, payload]);
  };

  const toggleTodo = (id: string) => {
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

  const removeTodo = (id: string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

import React, { createContext, ReactNode, useContext } from 'react';
import { Todo } from '../../types/todo.type';
import { useTodos } from '../hooks/useTodos';

interface TodoContextState {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodoStatus: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
}

const TodoContext = createContext<TodoContextState>({
  todos: [],
  addTodo: () => {},
  toggleTodoStatus: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
});

export const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { todos, addTodo, toggleTodoStatus, deleteTodo, editTodo } = useTodos();

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoStatus,
        editTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

import { Todo, TodoStatus } from './../../types/todo.type';
import { useEffect, useState } from 'react';
import { todosMock } from './../mocks/todos.mock';

export const useTodo = () => {
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

  useEffect(() => {
    console.log('setTodos todos:', todos);
  }, [todos]);

  return {
    todos,
    addTodo,
  };
};

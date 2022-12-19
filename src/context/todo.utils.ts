import { Todo, TodoStatus } from './../../types/todo.type';

export const TODOS_LOCAL_STORAGE_KEY = 'todos';

export const orderByRecentsFirst: (a: Todo, b: Todo) => number = (a, b) => {
  return b.createdAt < a.createdAt ? 1 : -1;
};

export const orderByPendingFirst: (a: Todo, b: Todo) => number = (a, b) => {
  return b.status === TodoStatus.PENDING && a.status !== TodoStatus.PENDING ? 1 : -1;
};

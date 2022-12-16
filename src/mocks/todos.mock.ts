import { Todo, TodoStatus } from './../../types/todo.type';

export const todosMock: Todo[] = [
  {
    created: new Date(),
    id: '001',
    status: TodoStatus.PENDING,
    title: 'First todo',
  },
  {
    created: new Date(),
    id: '002',
    status: TodoStatus.PENDING,
    title: 'Second todo',
  },
  {
    created: new Date(),
    id: '003',
    status: TodoStatus.COMPLETED,
    title: 'Third todo',
  },  
];

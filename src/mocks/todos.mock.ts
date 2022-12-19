import { Todo, TodoStatus } from './../../types/todo.type';

const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date()).toISOString();
const twoDaysAgo = ((d) => new Date(d.setDate(d.getDate() - 2)))(new Date()).toISOString();
const today = new Date().toISOString();

export const todosMock: Todo[] = [
  {
    createdAt: today,
    id: '1671206382611',
    status: TodoStatus.PENDING,
    title: 'Mock todo n.1',
  },
  {
    createdAt: yesterday,
    id: '1671234582612',
    status: TodoStatus.PENDING,
    title: 'Mock todo n.2',
  },
  {
    createdAt: twoDaysAgo,
    id: '167120666223',
    status: TodoStatus.COMPLETED,
    title: 'Mock todo n.2 - Should be start completed',
  },
  {
    createdAt: today,
    id: '1671252992614',
    status: TodoStatus.COMPLETED,
    title:
      'Very long description to test how the card is rendered on multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui quis metus aliquam vulputate.',
  },
];

import { Todo, TodoStatus } from './../../types/todo.type';

const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());
const twoDaysAgo = ((d) => new Date(d.setDate(d.getDate() - 2)))(new Date());

export const todosMock: Todo[] = [
  {
    createdAt: new Date(),
    id: '1671206382611',
    status: TodoStatus.PENDING,
    title: 'First todo',
  },
  {
    createdAt: yesterday,
    id: '1671234582612',
    status: TodoStatus.PENDING,
    title: 'Second todo',
  },
  {
    createdAt: twoDaysAgo,
    id: '167120666223',
    status: TodoStatus.COMPLETED,
    title: 'Third todo',
  },
  {
    createdAt: new Date(),
    id: '1671252992614',
    status: TodoStatus.COMPLETED,
    title:
      'Very long description to test how the card is rendered on multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui quis metus aliquam vulputate.',
  },
];

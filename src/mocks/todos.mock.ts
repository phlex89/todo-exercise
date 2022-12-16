import { Todo, TodoStatus } from './../../types/todo.type';

export const todosMock: Todo[] = [
  {
    created: new Date(),
    id: '1671206382611',
    status: TodoStatus.PENDING,
    title: 'First todo',
  },
  {
    created: new Date(),
    id: '1671234582612',
    status: TodoStatus.PENDING,
    title: 'Second todo',
  },
  {
    created: new Date(),
    id: '167120666223',
    status: TodoStatus.COMPLETED,
    title: 'Third todo',
  },
  {
    created: new Date(),
    id: '1671252992614',
    status: TodoStatus.COMPLETED,
    title:
      'Very long description to test how the card is rendered on multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dui quis metus aliquam vulputate.',
  },
];

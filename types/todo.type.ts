export enum TodoStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

export type Todo = {
  id: string;
  createdAt: string;
  title: string;
  status: TodoStatus;
};

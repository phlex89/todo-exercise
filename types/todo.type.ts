export enum TodoStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

export type Todo = {
  id: string;
  createdAt: Date;
  title: string;
  status: TodoStatus;
};

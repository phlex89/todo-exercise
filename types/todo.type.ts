export enum TodoStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

export type Todo = {
  id: string;
  created: Date;
  title: string;
  status: TodoStatus;
};

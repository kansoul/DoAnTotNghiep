export interface Todo {
  id: string;
  idDoc?: string;
  uid: string | undefined;
  title: string;
  content: string;
  status: string;
  createdAt: string | date;
  completedAt?: string;
}

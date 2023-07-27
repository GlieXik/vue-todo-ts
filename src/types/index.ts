export interface Todo {
  id: number;
  data: string;
  completed: boolean;
}
export interface State {
  todos: Todo[];
  statusFilter: string;
}

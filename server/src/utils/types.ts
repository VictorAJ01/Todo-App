export interface User {
  _id: string;
  username: string;
  password: string;
  todo: Array<TodoPayload>;
}

export interface TodoPayload {
  id?: string;
  title: string;
}

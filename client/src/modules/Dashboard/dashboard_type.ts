import { HttpStatus } from "../../commons";

export interface TodoResponseObject {
  id: string;
  todo: string;
  color: string;
}

export interface TodoResponsePayload {
  _id: string;
  todo: string;
  color: string;
}

export interface GetUserDetailsResponse {
  user: {
    _id: string;
    username: string;
  };
  todo: Array<TodoResponsePayload>;
}

export interface GetUserDetailsState {
  status: HttpStatus;
  message?: string;
  response?: GetUserDetailsResponse;
}

import { HttpStatus } from "../../commons";

export interface TodoResponseObject {
  id: string;
  todo: string;
  time: string;
  color: string;
}

export interface GetUserDetailsResponse {
  user: {
    _id: string;
    username: string;
  };
  todo: Array<string>;
}

export interface GetUserDetailsState {
  status: HttpStatus;
  message?: string;
  response?: GetUserDetailsResponse;
}

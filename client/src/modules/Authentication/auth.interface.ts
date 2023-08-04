import { SubmitHandler } from "react-hook-form";
import { HttpStatus } from "../../commons";

export interface FormInputs {
  username: string;
  password: string;
}

export interface AuthFormProps {
  buttonTitle: string;
  onSubmit: SubmitHandler<FormInputs>;
}

export interface LoginResponsePayload {
  token: string;
}

export interface AuthState {
  status: HttpStatus;
  message?: string;
  response?: LoginResponsePayload;
}

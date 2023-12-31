export const AUTHENTICATION_STATUS = Object.freeze({
  UNKNOWN: "UNKNOWN",
  VERIFYING: "VERIFYING",
  AUTHENTICATED: "AUTHENTICATED",
  NOT_AUTHENTICATED: "NOT_AUTHENTICATED",
});

export enum HttpStatus {
  IDLE = "IDLE",
  LOADING = "LOADING",
  DONE = "DONE",
  ERROR = "ERROR",
}

import Axios from "axios";
import { getCredentials } from "../commons";

export const endpoints: Record<string, string> = Object.freeze({
  default: "http://localhost:5000/api/v1",
});

export const getApiEndpoint = () => {
  console.log({
    env: process.env?.REACT_APP_ENVIRONMENT,
    baseUrl: endpoints[process.env?.REACT_APP_ENVIRONMENT ?? "default"],
  });
  return (
    endpoints[process.env?.REACT_APP_ENVIRONMENT ?? "default"] ||
    endpoints.default
  );
};

const AxiosInstance = Axios.create({
  baseURL: getApiEndpoint(),
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    // Treat 404 as success with empty payload
    return (status >= 200 && status < 300) || status === 404;
  },
});

AxiosInstance.interceptors.request.use(
  function (config) {
    const { token } = getCredentials();
    config.headers.set("X-API-KEY", token);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (data.isError && !((status >= 200 && status < 300) || status === 404)) {
      return Promise.reject(
        response?.data?.message ?? "There was a fatal error from our end."
      );
    }
    return data?.payload ?? [];
  },
  (error) => {
    if (error.response) {
      const { status, statusText, data } = error.response;
      console.log(status, statusText);
      if (status === 401) {
        // store.dispatch(unAuth());
      }
      if (data) {
        return Promise.reject(data?.message ?? statusText);
      }

      return Promise.reject("Error form axios interceptor");
    }
    return Promise.reject(error?.message ?? "Timeout exceeded");
  }
);

export default AxiosInstance;

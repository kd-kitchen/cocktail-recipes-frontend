import RootState from "@/domain/root-state";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { select } from "redux-saga/effects";

const baseURL = (function () {
  if (!!process.env["REACT_APP_BASE_API"]) return process.env["REACT_APP_BASE_API"];

  const { protocol, hostname, port } = window.location;
  const url = `${protocol}//${hostname}`;

  if ((protocol === "https:" && port === "443") || (protocol === "http:" && port === "80")) {
    return url;
  } else {
    return url + `:${port}`;
  }
})();

export function* createInstance() {
  const token: string = yield select((s: RootState) => s.account.token);

  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function* get<T>(url: string, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  return c.get<T>(url, config);
}

export function* post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  return c.post<T>(url, data, config);
}

export function* put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  return c.put<T>(url, data, config);
}

export function* del<T>(url: string, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  return c.delete<T>(url, config);
}

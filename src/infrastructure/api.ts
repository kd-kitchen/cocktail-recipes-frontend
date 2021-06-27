import RootState from "@/domain/root-state";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { call, select } from "redux-saga/effects";

const baseURL = (function() {
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
      Authorization: `Bearer ${token}`
    }
  });
}

export function* get<T>(url: string, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  const response: AxiosResponse<T> = yield call([c, c.get], url, config);
  return response;
}

export function* post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  const response: AxiosResponse<T> = yield call([c, c.post], url, data, config);
  return response;
}

export function* put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  const response: AxiosResponse<T> = yield call([c, c.put], url, data, config);
  return response;
}

export function* del<T>(url: string, config?: AxiosRequestConfig) {
  const c: AxiosInstance = yield createInstance();
  const response: AxiosResponse<T> = yield call([c, c.delete], url, config);
  return response;
}

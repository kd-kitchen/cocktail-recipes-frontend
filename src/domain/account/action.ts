import { createAction, createAsyncAction } from "typesafe-actions";
import * as T from "./types";

export const LoginAccountAsync = createAsyncAction(
  "LOGIN_ACCOUNT_REQUEST",
  "LOGIN_ACCOUNT_SUCCESS",
  "LOGIN_ACCOUNT_FAILURE"
)<T.LoginDetail, T.LoginResult, void>();

export const logout = createAction("LOGOUT_USER")<void>();

import axios, { AxiosResponse } from "axios";
import { all, call, delay, fork, put, select, takeLatest } from "redux-saga/effects";
import RootState from "../root-state";
import * as A from "./action";
import * as T from "./types";

const LOCAL_STORAGE_USER_KEY = "LOCAL_STORAGE_USER_DATA_STORAGE_KEY";

function* loginAccountSaga({ payload }: ReturnType<typeof A.LoginAccountAsync.request>) {
  try {
    const { data, status }: AxiosResponse<T.LoginResult> = yield call(
      axios.get,
      `${window.location.origin}/api/account`,
      { auth: payload }
    );

    if (status === 200) {
      yield put(A.LoginAccountAsync.success(data));
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data));
    } else {
      yield put(A.LoginAccountAsync.failure());
    }
  } catch (e) {
    yield put(A.LoginAccountAsync.failure());
  }
}

function* logoutAccountSaga() {
  yield;
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
}

/**
 * This saga checks constantly (every 5 minutes) whether the JWT token is still valid (has expired or not).
 * If it has, it will force the user to log out (1)
 */
function* validateCurrentAccountStatusSaga() {
  while (true) {
    const exp: string = yield select((s: RootState) => s.account.exp);
    if (exp.length > 0) {
      const now = new Date();
      const current = new Date(exp);

      if (current > now) {
        // 1. log the user out
        // 2. use the existing username and password to fetch a new token in the background
        // 3. put an action which changes the reducer store. The change with which will then trigger a view state change
        //    meaning that for example, a pop up will appear with a link to login
      }
    }

    yield delay(5 * 60 * 1000);
  }
}

/**
 * This saga only runs once. It checks whether there is login (token) in the past that is still valid. if there is one,
 * the saga logs in the user with the previous token. 
 */
function* initialLoginFromStoreSaga() {
  const payload = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
  if (typeof payload === "string") {
    const loginResult: T.LoginResult = JSON.parse(payload);
    const now = new Date()
    if (now < new Date(loginResult.exp)) {
      yield put(A.LoginAccountAsync.success(loginResult));
    } else {
      // Since payload is no longer valid, we just remove it from the store
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    }
  }
}

export default function* AccountSaga() {
  yield all([
    takeLatest(A.LoginAccountAsync.request, loginAccountSaga),
    takeLatest(A.logout, logoutAccountSaga),
    fork(validateCurrentAccountStatusSaga),
    fork(initialLoginFromStoreSaga),
  ]);
}

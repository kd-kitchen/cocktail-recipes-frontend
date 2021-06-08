import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as A from "./action";
import * as T from "./types";

function* loginAccountSaga({ payload }: ReturnType<typeof A.LoginAccountAsync.request>) {
  try {
    const { data, status }: AxiosResponse<T.LoginResult> = yield call(
      axios.get,
      `${window.location.origin}/api/account`,
      { auth: payload }
    );

    if (status === 200) {
      yield put(A.LoginAccountAsync.success(data));
    } else {
      yield put(A.LoginAccountAsync.failure());
    }
  } catch (e) {
    yield put(A.LoginAccountAsync.failure());
  }
}

export default function* AccountSaga() {
  yield all([takeLatest(A.LoginAccountAsync.request, loginAccountSaga)]);
}

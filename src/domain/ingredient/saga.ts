import { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import * as A from "./action";
import * as T from "./types";
import * as api from "@/infrastructure/api";


// const LOCAL_STORAGE_INGREDIENT_INFO = "LOCAL_STORAGE_INGREDIENT_INFO";

function* fetchIngredientSaga() {
  // const get: typeof axios.get = yield select(api.get);
  try {
    const { data, status }: AxiosResponse<T.Ingredient[]> = yield api.get(`/api/ingredient`);

    if (status === 200) {
      yield put(A.fetchAllIngredientsAsync.success(data));
      // localStorage.setItem(LOCAL_STORAGE_INGREDIENT_INFO, JSON.stringify(data));
    } else {
      yield put(A.fetchAllIngredientsAsync.failure());
    }
  } catch (e) {
    yield put(A.fetchAllIngredientsAsync.failure());
  }
}

export default function* IngredientSaga() {
  yield all([
    takeLatest(A.fetchAllIngredientsAsync.request, fetchIngredientSaga)
  ]);
}
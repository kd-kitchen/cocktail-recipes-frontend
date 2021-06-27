import { AxiosResponse } from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import * as A from "./action";
import * as T from "./types";
import * as api from "@/infrastructure/api";


function* fetchRecipesSaga() {
  try {
    const { data, status }: AxiosResponse<T.Recipe[]> = yield api.get(`/api/recipe`);
    if (status === 200) {
      yield put(A.fetchAllRecipesAsync.success(data));
    } else {
      yield put(A.fetchAllRecipesAsync.failure());
    }
  } catch (e) {
    yield put(A.fetchAllRecipesAsync.failure());
  }
}

export default function* IngredientSaga() {
  yield all([
    takeLatest(A.fetchAllRecipesAsync.request, fetchRecipesSaga)
  ]);
}
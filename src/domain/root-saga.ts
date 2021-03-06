import { all, call, delay, spawn } from "redux-saga/effects";
import { AccountSaga } from "./account";
import { IngredientSaga } from "./ingredient";
import { RecipeSaga } from "./recipe";

function* rootSaga() {
  // List your sagas here
  const sagas = [AccountSaga, IngredientSaga, RecipeSaga].map(recoverable);
  yield all(sagas.map(call));
}

const recoverable = (saga: any) =>
  function* () {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (e) {
          console.error("Unexpected error: ", e);
        }
        yield delay(250); // 250 milliseconds delay after each failure
      }
    });
  };

export default rootSaga;

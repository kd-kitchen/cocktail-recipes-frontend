import rootReducer from "@/domain/root-reducer";
import rootSaga from "@/domain/root-saga";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

function createAppStore() {
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(rootSaga);

  return store;
}

export default createAppStore();

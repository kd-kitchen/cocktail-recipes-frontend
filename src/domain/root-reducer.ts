import { combineReducers } from "redux";
import RootState from "./root-state";
import { AccountReducer } from "@/domain/account";

const rootReducer = combineReducers<RootState>({
  account: AccountReducer,
});

export default rootReducer;

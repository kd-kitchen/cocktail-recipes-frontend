import { combineReducers } from "redux";
import RootState from "./root-state";
import { AccountReducer } from "@/domain/account";
import { IngredientReducer} from "@/domain/ingredient";

const rootReducer = combineReducers<RootState>({
  account: AccountReducer,
  ingredient: IngredientReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import RootState from "./root-state";
import { AccountReducer } from "@/domain/account";
import { IngredientReducer } from "@/domain/ingredient";
import { RecipeReducer } from "@/domain/recipe";

const rootReducer = combineReducers<RootState>({
  account: AccountReducer,
  ingredient: IngredientReducer,
  recipe: RecipeReducer
});

export default rootReducer;

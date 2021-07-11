import { AccountAction } from "@/domain/account";
import { IngredientAction } from "@/domain/ingredient";
import { RecipeAction } from "@/domain/recipe";
import { CartAction } from "@/domain/cart";


import { ActionType } from "typesafe-actions";

type AllActions =
  ActionType<typeof AccountAction>
  | ActionType<typeof IngredientAction>
  | ActionType<typeof RecipeAction>
  | ActionType<typeof CartAction>;

export default AllActions;

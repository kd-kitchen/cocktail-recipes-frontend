import { AccountAction } from "@/domain/account";
import { IngredientAction } from "@/domain/ingredient";
import { RecipeAction } from "@/domain/recipe";

import { ActionType } from "typesafe-actions";

type AllActions =
  ActionType<typeof AccountAction>
  | ActionType<typeof IngredientAction>
  | ActionType<typeof RecipeAction>;

export default AllActions;

import { AccountAction } from "@/domain/account";
import { IngredientAction } from "@/domain/ingredient";

import { ActionType } from "typesafe-actions";

type AllActions = ActionType<typeof AccountAction> | ActionType<typeof IngredientAction>;

export default AllActions;

import AllActions from "@/domain/root-action";
import produce from "immer";
import { getType } from "typesafe-actions";
import * as A from "./action";
import { Store } from "./types";


const defaultStore: Store = {
  ingredients: [],
  status: {
    ingredients: "SUCCESS"
  }
};

export const IngredientReducer = (state = defaultStore, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.fetchAllIngredientsAsync.request):
        draft.status.ingredients = "REQUEST";
        break;
      case getType(A.fetchAllIngredientsAsync.success):
        draft.ingredients = action.payload;
        draft.status.ingredients = "SUCCESS";
        break;
      case getType(A.fetchAllIngredientsAsync.failure):
        draft.status.ingredients = "FAILURE";
        break;
    }
  });

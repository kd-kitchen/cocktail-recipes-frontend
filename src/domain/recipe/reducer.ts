import AllActions from "@/domain/root-action";
import produce from "immer";
import { getType } from "typesafe-actions";
import * as A from "./action";
import { Store } from "./types";


const defaultStore: Store = {
  recipes: {},
  status: {
    recipes: "SUCCESS"
  }
};

export const RecipeReducer = (state = defaultStore, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.fetchAllRecipesAsync.request):
        draft.status.recipes = "REQUEST";
        break;
      case getType(A.fetchAllRecipesAsync.success):
        draft.recipes = action.payload.reduce((acc, x) => ({...acc, [x.id]: x}), {});
        draft.status.recipes = "SUCCESS";
        break;
      case getType(A.fetchAllRecipesAsync.failure):
        draft.status.recipes = "FAILURE";
        break;
    }
  });

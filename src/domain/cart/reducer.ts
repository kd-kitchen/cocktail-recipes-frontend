import AllActions from "@/domain/root-action";
import produce from "immer";
import { getType } from "typesafe-actions";
import * as A from "./action";
import { Store } from "./types";

const defaultStore: Store = {
  items: {},
  status: {
    recipes: "SUCCESS"
  }
};

export const CartReducer = (state = defaultStore, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.addCartItem): {
        draft.items[action.payload.id] = action.payload;
        break;
      }
      case getType(A.removeCartItem): {
        if (draft.items.hasOwnProperty(action.payload.id))
          delete draft.items[action.payload.id];
        break;
      }
    }
  });
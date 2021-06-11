import AllActions from "@/domain/root-action";
import produce from "immer";
import { merge } from "lodash";
import { getType } from "typesafe-actions";
import * as A from "./action";
import * as T from "./types";
import { Store } from "./types";

const emptyUser: T.LoginResult = {
  isAdmin: false,
  username: "",
  email: "",
  token: "",
  exp: ""
};

const defaultStore: Store = {
  ...emptyUser,
  status: {
    login: "SUCCESS",
  },
};

export const AccountReducer = (state = defaultStore, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.LoginAccountAsync.request):
        draft.isAdmin = false;
        draft.status.login = "REQUEST";
        break;
      case getType(A.LoginAccountAsync.success):
        merge(draft, action.payload);
        draft.status.login = "SUCCESS";
        break;
      case getType(A.LoginAccountAsync.failure):
        merge(draft, emptyUser);
        draft.status.login = "FAILURE";
        break;
      case getType(A.logout):
        merge(draft, emptyUser);
        draft.status.login = "SUCCESS";
        break;
    }
  });

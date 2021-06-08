import { AccountAction } from "@/domain/account";

import { ActionType } from "typesafe-actions";

type AllActions = ActionType<typeof AccountAction>;

export default AllActions;

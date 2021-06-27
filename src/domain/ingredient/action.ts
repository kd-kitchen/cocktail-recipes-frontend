import { createAsyncAction } from "typesafe-actions";
import * as T from "./types";

export const fetchAllIngredientsAsync = createAsyncAction(
  "FETCH_ALL_INGREDIENTS_REQUEST",
  "FETCH_ALL_INGREDIENTS_SUCCESS",
  "FETCH_ALL_INGREDIENTS_FAILURE"
)<void, T.Ingredient[], void>();
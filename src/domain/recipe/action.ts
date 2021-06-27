import { createAsyncAction } from "typesafe-actions";
import * as T from "./types";

export const fetchAllRecipesAsync = createAsyncAction(
  "FETCH_ALL_RECIPES_REQUEST",
  "FETCH_ALL_RECIPES_SUCCESS",
  "FETCH_ALL_RECIPES_FAILURE"
)<void, T.Recipe[], void>();
import RootState from "@/domain/root-state";
import * as T from "./types";

/**
 * Returns if the the ingredient id is found
 */
export const getRecipeById = (id: string) => (s: RootState): T.Recipe => s.recipe.recipes[id];
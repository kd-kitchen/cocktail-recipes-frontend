import RootState from "@/domain/root-state";

/**
 * Returns if the the ingredient id is found
 */
export const getIngredientByName = (name: string) => (s: RootState) => s.ingredient.ingredients.find(e => e.name === name);
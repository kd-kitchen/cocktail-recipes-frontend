import { AccountType } from "@/domain/account";
import { IngredientType } from "@/domain/ingredient";
import { RecipeType } from "@/domain/recipe";

type RootState = {
  account: AccountType.Store;
  ingredient: IngredientType.Store;
  recipe: RecipeType.Store;
};

export default RootState;

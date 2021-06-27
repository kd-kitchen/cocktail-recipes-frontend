import { AccountType } from "@/domain/account";
import { IngredientType } from "@/domain/ingredient";

type RootState = {
  account: AccountType.Store;
  ingredient: IngredientType.Store;
};

export default RootState;

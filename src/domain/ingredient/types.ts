export type Store = {
  ingredients: Ingredient[];
  status: {
    ingredients: LoadingState;
  };
};

export type Ingredient = {
  id: number;
  name: string;
  description: string;
}

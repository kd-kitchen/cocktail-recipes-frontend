export type Store = {
  recipes: Record<string, Recipe>;
  status: {
    recipes: LoadingState;
  };
};

export type Recipe = {
  id: number;
  name: string;
  description: string;
  instruction: string;
  imageUrl: string;
  ingredients: Ingredient[];
}

export type Ingredient = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  imageUrl: string | null;
}
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IngredientAction as A } from "@/domain/ingredient";
import { useRootSelector } from "@/infrastructure/selector";
import IngredientCard from "./IngredientCard";


const IngredientList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(A.fetchAllIngredientsAsync.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading, ingredients } = useRootSelector((s) => ({
    ingredients: s.ingredient.ingredients,
    loading: s.ingredient.status.ingredients === "REQUEST"
  }));

  if (loading) {
    return <div>Loading</div>;
  }

  return <div>
    {ingredients.map(({ id, name, description }) => (
      <IngredientCard key={id} id={id} name={name} description={description} />
    ))}
  </div>;
};

export default IngredientList;
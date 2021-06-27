import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RecipeAction as A } from "@/domain/recipe";
import { useRootSelector } from "@/infrastructure/selector";
import RecipeCard from "./RecipeCard";
import { Col, Row } from "antd";


const RecipeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(A.fetchAllRecipesAsync.request());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading, recipes } = useRootSelector(({ recipe }) => ({
    recipes: Object.keys(recipe.recipes),
    loading: recipe.status.recipes === "REQUEST"
  }));

  if (loading) {
    return <div>Loading</div>;
  }

  return <Row gutter={[6, 24]}>
    {recipes.map((id) => (
      <Col key={id} xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>
        <RecipeCard id={id} />
      </Col>
    ))}
  </Row>;
};

export default RecipeList;
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IngredientAction as A } from "@/domain/ingredient";
import { useRootSelector } from "@/infrastructure/selector";
import IngredientCard from "./IngredientCard";
import { Col, Row } from "antd";


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

  return <Row gutter={[6, 24]}>
    {ingredients.map(({ id, name, description }) => (
      <Col key={id} xs={24} sm={12} md={12} lg={8} xl={6} xxl={4}>
        <IngredientCard id={id} name={name} description={description} />
      </Col>
    ))}
  </Row>;
};

export default IngredientList;
import { Avatar, Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { Meta } from "antd/es/list/Item";
import { useRootSelector } from "@/infrastructure/selector";
import { getRecipeById } from "@/domain/recipe/selectors";
import { getImageUrl } from "@/infrastructure/api";

type Props = {
  id: string;
}


const RecipeCard = ({ id }: Props) => {
  const recipe = useRootSelector(getRecipeById(id));

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={getImageUrl(recipe.imageUrl)} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={recipe.name}
        description={recipe.description}
      />
      <p>
        Ingredients: {recipe.ingredients.map(e => e.name).join(", ")}
      </p>
    </Card>
  );
};

export default RecipeCard;
import { Avatar, Card } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import React from "react";
import { Meta } from "antd/es/list/Item";

type Props = {
  id: number;
  name: string;
  description: string;
}


const IngredientCard = ({ name, description }: Props) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={name}
        description={description}
      />
    </Card>
  );
};

export default IngredientCard;
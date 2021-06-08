import { Col, Row } from "antd";
import React from "react";

const BrowseRecipes = () => {
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col span={8}>CARD GOES HERE</Col>
        <Col span={8}>This is a Column</Col>
        <Col span={8}>This is a Column</Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={8}>This is a Column</Col>
        <Col span={8}>This is a Column</Col>
        <Col span={8}>This is a Column</Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={8}>This is a Column</Col>
        <Col span={8}>This is a Column</Col>
        <Col span={8}>This is a Column</Col>
      </Row>
    </>
  );
};

export default BrowseRecipes;

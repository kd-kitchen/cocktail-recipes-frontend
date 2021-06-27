import { AccountAction } from "@/domain/account";
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

const CreateAcc = () => {
  // const { isLoading, isLoggedIn } = useRootSelector((s) => ({
  //   isLoggedIn: AccountSelector.isLoggedIn(s),
  //   isLoading: s.account.status.login === "REQUEST"
  // }));
  const dispatch = useDispatch();

  const md = 4;
  const sm = 24;

  return (
    <Row justify="center">
      <Col md={14} sm={26}>
        <Form
          labelCol={{ md, sm }}
          wrapperCol={{ md: 26 - md, sm }}
          name="create-form"
          onFinish={(v) => {
            dispatch(AccountAction.LoginAccountAsync.request(v));
          }}
        >
          <Form.Item label="Username" name="username" rules={[{ required: true, message: "Username is required" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Email is required" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Password is required" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label="Confirm Password" name="password" rules={[{ required: true, message: "Please confirm password" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ sm: { offset: sm, span: sm }, md: { offset: md, span: 24 - md } }}>
            <Button type="primary" htmlType="submit" >
              Create Account & Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default CreateAcc;

import { AccountAction, AccountSelector } from "@/domain/account";
import { useRootSelector } from "@/infrastructure/selector";
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const { isLoading, isLoggedIn } = useRootSelector((s) => ({
    isLoggedIn: AccountSelector.isLoggedIn(s),
    isLoading: s.account.status.login === "REQUEST",
  }));
  const dispatch = useDispatch();

  const md = 4;
  const sm = 24;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Row justify="center">
      <Col md={12} sm={24}>
        <Form
          labelCol={{ md, sm }}
          wrapperCol={{ md: 24 - md, sm }}
          name="login-form"
          onFinish={(v) => {
            dispatch(AccountAction.LoginAccountAsync.request(v));
          }}
        >
          <Form.Item label="Username" name="username" rules={[{ required: true, message: "Username is required" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Password is required" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ sm: { offset: sm, span: sm }, md: { offset: md, span: 24 - md } }}>
            <Button type="primary" htmlType="submit" disabled={isLoading} loading={isLoading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;

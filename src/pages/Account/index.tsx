import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./sub-pages";

const AccountMasterPage = () => (
  <Routes>
    <Route key="login" path="/login" element={<LoginForm />} />
  </Routes>
);

export default AccountMasterPage;

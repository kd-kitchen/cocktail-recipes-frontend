import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginForm, CreateAcc } from "./sub-pages";

const AccountMasterPage = () => (
  <Routes>
    <Route key="login" path="/login" element={<LoginForm />} />
    <Route key="createacc" path="/createacc" element={<CreateAcc />} />
  </Routes>
);

export default AccountMasterPage;

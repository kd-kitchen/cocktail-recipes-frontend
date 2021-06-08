import styles from "@/App/styles.module.css";
import routes from "@/pages";
import { Layout } from "antd";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Header />
      <div className={styles.container}>
        <Layout.Content className={styles.content}>
          <Routes>
            {routes.map(({ component, exact = false, path }) => {
              const routePath = exact ? path : path.replace(/\/+$/, "") + "/*";
              return <Route key={path} path={routePath} element={component} />;
            })}
            <Route path="/*" element={<div>404</div>} />
          </Routes>
        </Layout.Content>
        <Footer />
      </div>
    </Layout>
  </BrowserRouter>
);

export default App;

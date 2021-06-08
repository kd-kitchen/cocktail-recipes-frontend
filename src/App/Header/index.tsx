import routes from "@/pages";
import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import UserControl from "./UserControl";

const Header = () => {
  const { pathname } = useLocation();
  // skip home and find current route
  const currentRoute = routes.find((e) => pathname.startsWith(e.path) && e.path !== "/");
  const defaultSelectedKeys = currentRoute ? [currentRoute!.sectionName!] : [];

  return (
    <Layout.Header className={styles.header}>
      <div className={styles.title}>
        <Link to="/">The Cocktail App</Link>
      </div>
      <div className={styles.menuBar}>
        <Menu theme="dark" mode="horizontal" selectedKeys={defaultSelectedKeys}>
          {routes
            .filter((s) => !s.skipMenu)
            .map(({ sectionName, path }) => (
              <Menu.Item key={sectionName}>
                <Link to={path}>{sectionName}</Link>
              </Menu.Item>
            ))}
        </Menu>
        <UserControl />
      </div>
    </Layout.Header>
  );
};

export default Header;

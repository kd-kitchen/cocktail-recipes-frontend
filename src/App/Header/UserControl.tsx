import { useRootSelector } from "@/infrastructure/selector";
import { Avatar, Dropdown, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const UserControl = () => {
  const username = useRootSelector((s) => s.account.username);

  return username === "" ? (
    <Link className={styles.loginButton} to="/account/login">
      Log in
    </Link>
  ) : (
    <div>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="log-out">Log out</Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <>
          <Avatar>{username[0].toUpperCase()}</Avatar>
          <span className={styles.loginUsername}>{username}</span>
        </>
      </Dropdown>
    </div>
  );
};

export default UserControl;

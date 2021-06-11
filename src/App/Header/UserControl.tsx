import * as A from "@/domain/account/action";
import { useRootSelector } from "@/infrastructure/selector";
import { Avatar, Dropdown, Menu } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const UserControl = () => {
  const username = useRootSelector((s) => s.account.username);
  const dispatch = useDispatch();

  return username === "" ? (
    <Link className={styles.loginButton} to="/account/login">
      Log in
    </Link>
  ) : (
    <div>
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="log-out" onClick={() => dispatch(A.logout())}>
              Log out
            </Menu.Item>
          </Menu>
        }
        trigger={["click"]}
      >
        <div className={styles.userMenu}>
          <Avatar>{username[0].toUpperCase()}</Avatar>
          <span className={styles.loginUsername}>{username}</span>
        </div>
      </Dropdown>
    </div>
  );
};

export default UserControl;

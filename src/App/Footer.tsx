import styles from "@/App/styles.module.css";
import { Layout } from "antd";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Layout.Footer className={styles.footer}>
      <div className={styles.footerContent}>
        The Cocktail App. Developed by Kendrick Sin and Daniel Bok {year > 2021 ? `2021-${year}` : "2021"}
      </div>
    </Layout.Footer>
  );
};

export default Footer;

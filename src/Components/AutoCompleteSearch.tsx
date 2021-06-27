import { AutoComplete } from "antd";
import React from "react";
import styles from "@/App/Header/styles.module.css";

const AutoCompleteSearch = () => {
  const options = [
    { value: 'Mojito' },
    { value: 'Screwdriver' },
    { value: 'Gin Tonic' },
  ];
  return (
    <AutoComplete
      style={{ width: 500, height: 30 }}
      options={options}
      placeholder="Search something e.g. 'Mojito'"
      filterOption={(inputValue, option) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    />
  );
};

export default AutoCompleteSearch
import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={styles.user}>
      {props.name} ({props.age} years old)
    </li>
  );
};

export default UserItem;

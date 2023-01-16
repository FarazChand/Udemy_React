import React from "react";
import UserItem from "./UserItem/UserItem";
import styles from "./UserList.module.css";

import Container from "../UI/Container";

const UserList = (props) => {
  const content = props.userListData.map((user) => {
    return <UserItem key={user.id} name={user.username} age={user.age} />;
  });

  return <Container className={styles.users}>{content}</Container>;
};

export default UserList;

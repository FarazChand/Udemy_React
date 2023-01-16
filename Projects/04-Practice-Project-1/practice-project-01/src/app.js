import React, { useState } from "react";
import UserList from "./components/UserList/UserList";
import NewUser from "./components/NewUser/NewUser";
import Modal from "./components/Modal/Modal";

import styles from "./app.module.css";

const DUMMY_STATE = [
  {
    username: "Max",
    age: 31,
    id: "a1",
  },
  {
    username: "Faraz",
    age: 29,
    id: "a2",
  },
];

const App = () => {
  const [userData, setUserData] = useState(DUMMY_STATE);
  const [isValid, setIsValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState("default");

  const NewUserHandler = (newUserData) => {
    setUserData((prevState) => {
      return [newUserData, ...prevState];
    });
  };

  const invalidInputHandler = (error) => {
    setIsValid(false);
    setErrorMsg(error);
  };

  const closeModalHandler = () => {
    setIsValid(true);
  };

  return (
    <div className={styles.app}>
      <Modal
        valid={isValid}
        error={errorMsg}
        onCloseModal={closeModalHandler}
      />
      <NewUser
        onNewUser={NewUserHandler}
        onInvalidInput={invalidInputHandler}
      />
      <UserList userListData={userData}></UserList>
    </div>
  );
};

export default App;

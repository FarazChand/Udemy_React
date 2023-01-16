import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Container from "../UI/Container";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredName || !enteredAge) {
      // console.log(`invalid input`);
      props.onInvalidInput("empty");
      return;
    }

    if (enteredAge < 0) {
      // console.log(`negative or not a number`);
      props.onInvalidInput("negative");
      return;
    }

    const userData = {
      username: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    props.onNewUser(userData);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <Container>
      <form className={styles["new-user-form"]} onSubmit={submitHandler}>
        <div className={styles["input-container"]}>
          <label className={styles["input-label"]}>Username</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            value={enteredName}
          ></input>
        </div>
        <div className={styles["input-container"]}>
          <label className={styles["input-label"]}>Age (Years)</label>
          <input
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
        </div>
        <button className={styles.button} type="submit">
          Add User
        </button>
      </form>
    </Container>
  );
};

export default NewUser;

import React from "react";

import styles from "./Modal.module.css";
import Container from "../UI/Container";

const Modal = (props) => {
  let title = "Invalid Input";
  let errorMessage = "default";

  const onClickHandler = () => {
    props.onCloseModal();
  };

  if (!props.valid) {
    if (props.error === "empty") {
      errorMessage = "You need to enter your info in both fields dawg";
    }
    if (props.error === "negative") {
      errorMessage = `You can't be a negative age dawg`;
    }
  }

  const checkValid = !props.valid && styles.invalid;

  // console.log(errorMessage);
  return (
    // <div className={`${styles.modal} ${!props.valid && styles.invalid}`}>
    <div onClick={onClickHandler} className={`${styles.modal} ${checkValid}`}>
      <Container className={styles["error-box"]}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles["error"]}>
          <p className={styles.text}>{errorMessage}</p>
          <button onClick={onClickHandler} className={styles.button}>
            Okay
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Modal;

// if (error === "empty") {
//     errorMessage = "You need to enter your info in both fields dawg";
//   }
//   if (error === "negative") {
//     errorMessage = `You can't be a negative age dawg`;
//   }

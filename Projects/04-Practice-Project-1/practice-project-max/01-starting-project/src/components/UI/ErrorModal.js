import React from "react";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <p className={styles.content}>{props.message}</p>
        <footer className={styles.actions}>
          <Button onClick={props.onClick}>OK</Button>
        </footer>
      </Card>
    </div>
  );
};

// className={styles.}
export default ErrorModal;

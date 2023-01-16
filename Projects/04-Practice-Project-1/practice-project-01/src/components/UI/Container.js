import React from "react";

import styles from "./Container.module.css";

const Container = (props) => {
  const classes = `${props.className} ${styles.container}`;

  return <div className={classes}>{props.children}</div>;
};

export default Container;

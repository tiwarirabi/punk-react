import React from "react";

import styles from "./Button.module.scss";

const Button = (props: any) => {
  const { onClick, children, isPrimary } = props;

  return (
    <button
      type={isPrimary ? "submit" : "button"}
      className={`${styles.Button} ${
        isPrimary ? styles.Primary : styles.Secondary
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section className={styles.Container}>
      Page Not Found. Go back to <Link to={"/"}>Home</Link>.
    </section>
  );
};

export default NotFound;

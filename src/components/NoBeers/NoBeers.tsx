import React from "react";

import { withBeers } from "store/Beer";
import { IBeersProps } from "types";

import styles from "./NoBeers.module.scss";

const NoBeers = (props: IBeersProps) => {
  const { myBeers, toggleAddBeerModal } = props.beers;

  if (myBeers.length) return null;

  return (
    <section className={styles.Container}>
      <div className={styles.CenterContainer}>
        <div className={styles.Text}>Nothing to see yet.</div>
        <div className={styles.Text}>
          <button className={styles.Button} onClick={toggleAddBeerModal}>
            Click here
          </button>
          to add your first beer!
        </div>
      </div>
    </section>
  );
};

export default withBeers(NoBeers);

import React from "react";

import Beer from "components/Beer/Beer";
import NoBeers from "components/NoBeers/NoBeers";

import { withBeers } from "store/Beer";
import { IBeersProps } from "types";

import styles from "./MyBeers.module.scss";

const MyBeers = (props: IBeersProps) => {
  const { myBeers } = props.beers;

  return (
    <section className={styles.Container}>
      <section
        className={`${styles.ListContainer} ${
          myBeers.length === 1 ? styles.SingleInListContainer : ""
        }`}
      >
        {myBeers.map((beer) => (
          <Beer beer={beer} />
        ))}
      </section>
      <NoBeers />
    </section>
  );
};

export default withBeers(MyBeers);

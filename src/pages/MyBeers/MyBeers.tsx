import React from "react";

import BeersList from "components/BeersList/BeersList";
import NoBeers from "components/NoBeers/NoBeers";

import { withBeers } from "store/Beer";
import { IBeersProps } from "types";

import styles from "./MyBeers.module.scss";

const MyBeers = (props: IBeersProps) => {
  const { myBeers } = props.beers;

  return (
    <section className={styles.Container}>
      {myBeers.length ? <BeersList beers={myBeers} /> : <NoBeers />}
    </section>
  );
};

export default withBeers(MyBeers);

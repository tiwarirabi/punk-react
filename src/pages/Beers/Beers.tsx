import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Spinner from "components/Spinner/Spinner";
import BeersList from "components/BeersList/BeersList";

import { withBeers } from "store/Beer";
import { IBeersProps } from "types";

import styles from "./Beers.module.scss";

const Beers = (props: IBeersProps) => {
  const { beers, fetchBeers, fetchingBeers, hasMoreBeersToFetch } = props.beers;

  useEffect(() => {
    if (!beers.length) fetchBeers();
  }, []);

  return (
    <section className={styles.Container}>
      <BeersList beers={beers} />
      <section className={styles.FetchMoreContainer}>
        {fetchingBeers ? (
          <Spinner />
        ) : hasMoreBeersToFetch ? (
          <button className={styles.FetchMoreButton} onClick={fetchBeers}>
            Load more beers <FontAwesomeIcon icon={faChevronDown} />
          </button>
        ) : null}
      </section>
    </section>
  );
};

export default withBeers(Beers);

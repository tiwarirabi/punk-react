import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Beer from "components/Beer/Beer";
import Spinner from "components/Spinner/Spinner";

import { withBeers } from "store/Beer";
import { IBeersProps } from "types";

import styles from "./Beers.module.scss";

const Beers = (props: IBeersProps) => {
  const { beers, fetchBeers, fetchingBeers } = props.beers;

  useEffect(() => {
    if (!beers.length) fetchBeers();
  }, []);

  return (
    <section className={styles.Container}>
      <section className={styles.ListContainer}>
        {beers.map((beer) => (
          <Beer beer={beer} />
        ))}
      </section>
      <section className={styles.FetchMoreContainer}>
        {fetchingBeers ? (
          <Spinner />
        ) : (
          <button className={styles.FetchMoreButton} onClick={fetchBeers}>
            Load more beers <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
      </section>
    </section>
  );
};

export default withBeers(Beers);

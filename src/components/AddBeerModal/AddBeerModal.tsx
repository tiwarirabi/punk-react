import React, { useEffect, useState } from "react";

import { withBeers } from "store/Beer";
import { IBeer, IBeersProps } from "types";
import Button from "components/Button/Button";

import styles from "./AddBeerModal.module.scss";

const getInitialBeer = (): IBeer => ({
  id: new Date().getTime(),
  image_url: "/images/beer.png",
  name: "",
  description: "",
  tagline: "",
});

const AddBeerModal = (props: IBeersProps) => {
  const [beer, setBeer] = useState<IBeer>(getInitialBeer());

  const { showingAddBeerModal, toggleAddBeerModal, saveBeer } = props.beers;

  useEffect(() => {
    setBeer(getInitialBeer());
  }, [showingAddBeerModal]);

  const onSave = (e: any) => {
    e.preventDefault();
    saveBeer(beer);
    toggleAddBeerModal();
  };

  if (!showingAddBeerModal) return null;
  return (
    <section className={styles.Container}>
      <section className={styles.BackgroundOverlay}></section>
      <section className={styles.ModalContainer}>
        <section className={styles.Modal}>
          <form onSubmit={onSave}>
            <h1>Add a New Beer</h1>
            <div className={styles.ImageContainer}>
              <img src="/images/beer.png" alt="beer" />
            </div>

            <input
              required={true}
              type="text"
              placeholder="Beer Name*"
              value={beer.name}
              onChange={(e) => setBeer({ ...beer, name: e.target.value })}
            />
            <input
              required={true}
              type="text"
              placeholder="Genre*"
              value={beer.tagline}
              onChange={(e) => setBeer({ ...beer, tagline: e.target.value })}
            />
            <textarea
              required={true}
              placeholder="Description*"
              onChange={(e) =>
                setBeer({ ...beer, description: e.target.value })
              }
              value={beer.description}
            />
            <section className={styles.ModalActions}>
              <Button onClick={toggleAddBeerModal}>Cancel</Button>
              <Button isPrimary>Save</Button>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
};

export default withBeers(AddBeerModal);

import React from "react";
import { Tooltip } from "react-tooltip";

import { IBeer } from "types";
import styles from "./Beer.module.scss";

interface IBeerProps {
  beer: IBeer;
}

const Beer = (props: IBeerProps) => {
  const { id, name, tagline, image_url, description, ingredients } = props.beer;

  const formattedIngredients = Object.keys(ingredients || "").join(", ");

  return (
    <section className={styles.Container}>
      <Tooltip
        id={id.toString()}
        place="top"
        className={styles.ToolTipContainer}
      >
        {formattedIngredients ? (
          <div
            className={styles.ToolTipText}
          >{`Ingredients: ${formattedIngredients}`}</div>
        ) : null}
      </Tooltip>
      <section
        className={styles.ImageContainer}
        data-tooltip-id={id.toString()}
      >
        <img src={image_url} alt={name} />
      </section>
      <section className={styles.DescriptionContainer}>
        <div className={styles.Name}>{name}</div>
        <div className={styles.Type}>{tagline}</div>
        <div className={styles.Description}>{description}</div>
      </section>
    </section>
  );
};

export default Beer;

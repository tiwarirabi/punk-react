import React from "react";
import { Link, useLocation } from "react-router-dom";

import { withBeers } from "store/Beer";
import { IBeersProps } from "types";
import Button from "components/Button/Button";

import styles from "./Header.module.scss";

const Header = (props: IBeersProps) => {
  const { toggleAddBeerModal } = props.beers;

  const { pathname } = useLocation();

  const navBarItems = [
    {
      path: "/",
      title: "All Beers",
    },
    {
      path: "/my-beers",
      title: "My Beers",
    },
  ];

  const showAddNewBeerButton = pathname === "/my-beers";

  return (
    <section className={styles.Container}>
      <section className={styles.NavBar}>
        <ul>
          {navBarItems.map((item: any, index: number) => (
            <li
              key={index}
              className={pathname === item.path ? styles.SelectedItem : ""}
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      {showAddNewBeerButton ? (
        <section className={styles.ActionBar}>
          <Button onClick={toggleAddBeerModal} isPrimary>
            Add a new beer
          </Button>
        </section>
      ) : null}
    </section>
  );
};

export default withBeers(Header);

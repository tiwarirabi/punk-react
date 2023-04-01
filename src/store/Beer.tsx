import React, { createContext, useState } from "react";

import useBeers from "store/useBeers";
import { IBeer, IBeerStore } from "../types";

const initialBeerStore: IBeerStore = {
  fetchBeers: () => {},
  saveBeer: () => {},

  fetchingBeers: false,
  beers: [],
  myBeers: [],

  showingAddBeerModal: false,
  toggleAddBeerModal: () => {},
};

export const BeerContext: React.Context<IBeerStore> =
  createContext(initialBeerStore);

export const BeerProvider = (props: any) => {
  const { children } = props;

  const [myBeers, setMyBeers] = useState<IBeer[]>([]);
  const [showingAddBeerModal, setShowingAddBeerModal] = useState<boolean>(
    initialBeerStore.showingAddBeerModal
  );

  const { fetchBeers, beers, loading: fetchingBeers, error } = useBeers();

  const value = {
    fetchingBeers,
    beers,
    fetchBeers,

    myBeers,
    saveBeer: (beer: IBeer) => setMyBeers([...myBeers, beer]),

    showingAddBeerModal,
    toggleAddBeerModal: () => setShowingAddBeerModal(!showingAddBeerModal),
  };

  return <BeerContext.Provider value={value}>{children}</BeerContext.Provider>;
};

export const withBeers = (Child: any) => (props: any) =>
  (
    <BeerContext.Consumer>
      {(context) => <Child {...props} beers={context} />}
    </BeerContext.Consumer>
  );

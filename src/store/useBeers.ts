import React, { useState } from "react";
import { IBeer } from "types";

const API_BASE_URL: string = "https://api.punkapi.com/v2/beers";
const DEFAULT_PER_PAGE: number = 10;

const useBeers = (
  perPage: number = DEFAULT_PER_PAGE,
  startPage: number = 1
) => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [nextPageNumber, setNextPageNumber] = useState<number>(startPage);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchBeers = () => {
    setLoading(true);

    const url = `${API_BASE_URL}?page=${nextPageNumber}&per_page=${perPage}`;

    return fetch(url)
      .then((response) => response.json())
      .then((result: IBeer[]) => {
        setNextPageNumber(nextPageNumber + 1);

        setBeers([...beers, ...result]);
      })
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  };

  return { fetchBeers, beers, loading, error };
};

export default useBeers;

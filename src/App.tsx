import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "react-tooltip/dist/react-tooltip.css";

import Header from "components/Header/Header";
import AddBeerModal from "components/AddBeerModal/AddBeerModal";

import { BeerProvider } from "store/Beer";

import NotFound from "pages/NotFound/NotFound";
import MyBeers from "pages/MyBeers/MyBeers";
import Beers from "pages/Beers/Beers";

const WithCommon = (props: any) => {
  const { element } = props;

  return (
    <>
      <Header />
      {element}
      <AddBeerModal />
    </>
  );
};

const url = window.location.href;
const isLocalHost = !!(
  url.indexOf("localhost") > -1 ||
  url === "[::1]" ||
  url.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
// first one is for local and later one is for github pages.
const basename = isLocalHost ? "" : "/punk-react";

const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <WithCommon element={<Beers />} />,
  },
  {
    path: "/my-beers",
    element: <WithCommon element={<MyBeers />} />,
  },
  {
    path: "*",
    element: <WithCommon element={<NotFound />} />,
  },
], { basename });

function App() {
  return (
    <BeerProvider>
      <RouterProvider router={router} />
    </BeerProvider>
  );
}

export default App;

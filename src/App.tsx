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
]);

function App() {
  return (
    <BeerProvider>
      <RouterProvider router={router} />
    </BeerProvider>
  );
}

export default App;

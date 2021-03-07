import React, { createContext, useState, Fragment, useContext } from "react";

import Router from "../Router";
import "./app.css";

import Context from "../../hooks/context";
import Products from "../../assets/data";

const App = () => {
  const [shoppingCartState, setShoppingCart] = useState([]);
  const [user, setUser] = useState({
    email: "",
    fristname: "",
    identification_document: "",
    lastname: "",
    number_phone: "",
  });

  const state = {
    shoppingCart: {
      value: shoppingCartState,
      addCart: (item) => {
        setShoppingCart((prevArray) => [...prevArray, item]);
      },
      removeCart: (id) => {
        let aux = shoppingCartState.filter((item) => item.id !== id);
        setShoppingCart(aux);
      },
      clean: () => {
        setShoppingCart([]);
      },
    },
    user: {
      value: user,
      setUser,
      clean: () => {
        setUser({
          email: "",
          fristname: "",
          identification_document: "",
          lastname: "",
          number_phone: "",
        });
      },
    },
    products: Products || [],
  };

  return (
    <Fragment>
      <Context.Provider value={state}>
        <Router />
      </Context.Provider>
    </Fragment>
  );
};

export default App;

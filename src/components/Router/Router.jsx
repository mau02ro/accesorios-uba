import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../Home";
import ShoppingCart from "../ShoppingCart";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shoppingcart" component={ShoppingCart} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

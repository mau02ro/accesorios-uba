import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../hooks/context";

import "./header.css";

const Header = () => {
  const {
    user: { value, clean },
    shoppingCart: { value: cartValue },
  } = useContext(Context);

  return (
    <header>
      <div className="header_wrapper wrapper">
        <div className="header_logo">
          <Link to="/" id="logo">
            <ion-icon name="phone-portrait-outline"></ion-icon>
            Accesorios
          </Link>
        </div>
        {value.fristname && (
          <nav className="header_nav">
            <ul>
              <li>
                <ion-icon name="person-sharp"></ion-icon> {value.fristname}
              </li>
              <li>
                <Link to="/shoppingcart" className="icon_shoppingCart">
                  <ion-icon name="cart"></ion-icon>
                  {cartValue.length}
                </Link>
              </li>
              <li>
                <Link to="/" className="icon_shoppingCart" onClick={clean}>
                  <ion-icon name="log-in-outline" className="log_in"></ion-icon>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

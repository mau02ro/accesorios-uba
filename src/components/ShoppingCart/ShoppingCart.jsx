import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../hooks/context";
import Card from "../Card";
import Modal from "../Modal";

import "./shoppingCart.css";

const ShoppingCart = ({ history: { push } }) => {
  const { shoppingCart, user } = useContext(Context);
  const [total, setTotal] = useState(0);
  const [toPay, setToPay] = useState(false);

  const handlePay = () => {
    setToPay(false);
    shoppingCart.clean();
  };

  useEffect(() => {
    if (!user.value.fristname) {
      push("/");
    }

    let monto = total;
    shoppingCart.value.forEach((item) => {
      monto += parseInt(item.price);
    });
    setTotal(monto);
  }, []);

  return (
    <div>
      {shoppingCart.value.length ? (
        <div>
          <div className="shoppingCart_head">
            <div className="shoppingCart_total">
              <span>Sub total: {total}$</span>
              <span>Total a pagar: {(total * 1.12).toFixed(2)}$</span>
            </div>
            <button
              type="button"
              className="btn btn_success"
              onClick={() => setToPay(true)}
            >
              Pagar
            </button>
          </div>
          <div className="grid_cards">
            {shoppingCart.value.map((item) => {
              return (
                <Card
                  data={item}
                  type="remove"
                  key={item.id}
                  removeCart={shoppingCart.removeCart}
                />
              );
            })}
          </div>

          {toPay && (
            <Modal>
              <h2 className="text_success">Su pago ha sido exitoso!!!</h2>
              <h3 className="text_subSuccess">Gracias por su compra.</h3>

              <Link to="/" className="btn" onClick={handlePay}>
                Regresar al catalogo
              </Link>
            </Modal>
          )}
          <Link to="/" className="btn">
            Regresar al catalogo
          </Link>
        </div>
      ) : (
        <div className="shoppingCart_error">
          <h2>Aun no has añadido elementos al carrito!!!</h2>
          <Link to="/" className="btn">
            Regresar al catalogo
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

import React from "react";

import "./card.css";

const Card = ({ data, type, addCart = () => {}, removeCart = () => {} }) => {
  return (
    <div className="card">
      <img src={data.src} alt="" className="card_img" />
      <div className="card_content">
        <h3 className="card_name">{data.name}</h3>
        <span className="card_price">Precio: {data.price}$</span>

        {type === "add" ? (
          <button
            type="button"
            className="btn btn_success"
            onClick={() => addCart(data)}
          >
            Añadir al carrito
          </button>
        ) : (
          <button
            type="button"
            className="btn btn_danger"
            onClick={() => removeCart(data.id)}
          >
            Eliminar del carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;

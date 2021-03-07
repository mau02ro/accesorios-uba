import React, { useState, useContext, useEffect } from "react";

import Modal from "../Modal";
import Context from "../../hooks/context";
import Card from "../Card";
import UserData from "../UserData";

const Home = () => {
  const { shoppingCart, products, user } = useContext(Context);
  const [modalValidation, changeModalValidation] = useState(
    !user.value.fristname ? true : false
  );

  useEffect(() => {
    if (!user.value.fristname) {
      changeModalValidation(true);
    }
  }, [user.value.fristname]);

  return (
    <div className="">
      <div className="grid_cards">
        {products.map((item) => {
          return (
            <Card
              data={item}
              type="add"
              key={item.id}
              addCart={shoppingCart.addCart}
            />
          );
        })}
      </div>
      {modalValidation && (
        <Modal>
          <UserData closeModal={changeModalValidation} />
        </Modal>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useContext } from "react";

import Context from "../../hooks/context";

import "./userData.css";

const UserData = ({ closeModal }) => {
  const { user } = useContext(Context);

  const [userState, setUserState] = useState({
    fristname: "",
    lastname: "",
    identification_document: "",
    email: "",
    number_phone: "",
  });

  const handleChange = (e) => {
    let name = e.target.id;
    let value = e.target.value;

    setUserState({
      ...userState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userState.fristname) {
      alert("Ingresa tu nombre");
    } else if (!userState.lastname) {
      alert("Ingresa tu apellido");
    } else if (!userState.identification_document) {
      alert("Ingresa tu documento de identificación");
    } else if (!userState.email) {
      alert("Ingresa tu Correo electronico");
    } else if (!userState.number_phone) {
      alert("Ingresa tu numero de telefono");
    } else {
      user.setUser(userState);
      closeModal(false);
    }
  };

  return (
    <section className="userData">
      <h2>Bienvenido</h2>
      <p>
        Bienvenido a la mejor tienda de accesorios de teléfonos móviles, para
        continuar ingresa tus datos.
      </p>
      <form onSubmit={handleSubmit} className="userData_form">
        <div className="userData_group">
          <label htmlFor="fristname">Nombre:</label>
          <input
            type="text"
            id="fristname"
            value={userState.fristname}
            onChange={handleChange}
          />
        </div>
        <div className="userData_group">
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            id="lastname"
            value={userState.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="userData_group">
          <label htmlFor="identification_document">
            Documento de identificación:
          </label>
          <input
            type="text"
            id="identification_document"
            value={userState.identification_document}
            onChange={handleChange}
          />
        </div>
        <div className="userData_group">
          <label htmlFor="number_phone">Numero de telefono:</label>
          <input
            type="text"
            id="number_phone"
            value={userState.number_phone}
            onChange={handleChange}
          />
        </div>
        <div className="userData_group">
          <label htmlFor="email">Correo electronico:</label>
          <input
            type="text"
            id="email"
            value={userState.email}
            onChange={handleChange}
          />
        </div>
        <div className="userData_group">
          <button type="submit" className="btn">
            Registrar
          </button>
        </div>
      </form>
    </section>
  );
};

export default UserData;

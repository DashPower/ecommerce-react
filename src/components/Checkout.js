import React, { useState } from "react";

const Checkout = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="checkout">
      <div className="cartCheckout">
        <h1>aqui se debe mostrar el total y el carrito como retorno</h1>
      </div>
      <h1>Ingresa tus datos</h1>
      <form onChange={(ev) => setSearch(ev.target.value)}>
        <div className="formColumn">
          <p>Primer Apellido</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Ciudad</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Pais</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Numero de Telefono</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Email</p>
          <input type="text" name="search" autoComplete="off" />
        </div>
        <img src="/dota2logo.png" alt="pepe" className="imgForm" />
        <div className="formColumn">
          <p>Primer Nombre</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Codigo postal</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Estado</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Direccion</p>
          <input type="text" name="search" autoComplete="off" />
          <p>Codigo Postal</p>
          <input type="text" name="search" autoComplete="off" />
        </div>
      </form>
      <button className="buttonForm" type="submit">
        buscar
      </button>
    </div>
  );
};

export default Checkout;

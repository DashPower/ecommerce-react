import React, { useState } from "react";
import { useCarrito } from "./CustomProvider";
import { Link, useNavigate } from "react-router-dom";
import { db } from "./../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useCarrito();
  const [steps, setSteps] = useState(false);
  const [dataForm, setDataForm] = useState({ carrito: carrito });
  const navigate = useNavigate();
  const onChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };
  const addFecha = () => {
    const fecha = serverTimestamp();
    dataForm.fecha = fecha;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addFecha();
    const comprasCollection = collection(db, "Compras");
    const compra = dataForm;
    addDoc(comprasCollection, compra)
      .then((docRef) => {
        toast.success("Compra realizada con exito!");
        vaciarCarrito();
        navigate("/");
        toast.info(`Su ticket de compra es: ` + docRef.id, {
          autoClose: false,
        });
      })
      .catch();
  };
  const totalCarrito = carrito
    .map((item) => item.cantidad * item.price)
    .reduce((a, b) => a + b, 0);
  if (steps) {
    return (
      <div className="checkoutStep animate__animated animate__fadeInLeft">
        <div className="cartCheckoutStep">
          <form onSubmit={onSubmit}>
            <div className="formColumn">
              <p className="formText">Titular Tarjeta</p>
              <input
                type="text"
                name="titularTarjeta"
                onChange={onChange}
                placeholder="name"
                autoComplete="off"
              />
              <p className="formText">Fecha de vencimiento</p>
              <input
                type="text"
                onChange={onChange}
                name="vencimiento"
                placeholder="xx/xx/xxxx"
                autoComplete="off"
              />
              <p className="formText">CVC</p>
              <input
                type="text"
                name="cvc"
                onChange={onChange}
                placeholder="CVC"
                autoComplete="off"
              />
              <p className="formText">Numero de Tarjeta</p>
              <input
                type="text"
                name="numeroTarjeta"
                onChange={onChange}
                placeholder="xxxxx-xxxxxx-xxxxx"
                autoComplete="off"
              />
              <div className="lastButtons">
                <span
                  onClick={() => setSteps(false)}
                  className="material-symbols-outlined cleanCart"
                >
                  arrow_back
                </span>
                <button
                  type="submit"
                  className="material-symbols-outlined checkCart"
                >
                  task_alt
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="checkout">
      <div className="cartCheckout">
        <div className="cartViewer animate__animated animate__fadeIn">
          <span className="fontWeight">Carrito</span>
          <p className="fontWeight">
            {" "}
            Total: <span className="unset">${totalCarrito}</span>
          </p>
          <Link className="position" to="/cart">
            Ver en carrito
            <span className="material-symbols-outlined">navigate_next</span>
          </Link>
        </div>
      </div>
      <h1>Ingresa tus datos</h1>
      <form className="animate__animated animate__fadeInUp">
        <div className="formColumn">
          <p className="formText">Primer Apellido</p>
          <input
            type="text"
            name="apellido"
            onChange={onChange}
            placeholder="Apellido"
            autoComplete="off"
          />
          <p className="formText">Ciudad</p>
          <input
            type="text"
            name="ciudad"
            onChange={onChange}
            placeholder="Ciudad"
            autoComplete="off"
          />
          <p className="formText">Pais</p>
          <input
            type="text"
            name="pais"
            onChange={onChange}
            placeholder="Pais"
            autoComplete="off"
          />
          <p className="formText">Numero de Telefono</p>
          <input
            type="text"
            name="telefono"
            onChange={onChange}
            placeholder="Telefono"
            autoComplete="off"
          />
          <p className="formText">Email</p>
          <input
            type="text"
            name="email"
            onChange={onChange}
            placeholder="example@gmail.com"
            autoComplete="off"
          />
        </div>
        <img src="/dota2logo.png" alt="pepe" className="imgForm" />
        <div className="formColumn">
          <p className="formText">Primer Nombre</p>
          <input
            type="text"
            name="nombre"
            onChange={onChange}
            placeholder="Nombre"
            autoComplete="off"
          />
          <p className="formText">Codigo postal</p>
          <input
            type="text"
            name="codigoPostal"
            onChange={onChange}
            placeholder="Code"
            autoComplete="off"
          />
          <p className="formText">Estado</p>
          <input
            type="text"
            name="estado"
            onChange={onChange}
            placeholder="Estado"
            autoComplete="off"
          />
          <p className="formText">Direccion</p>
          <input
            type="text"
            name="direccion"
            onChange={onChange}
            placeholder="Direccion"
            autoComplete="off"
          />
          <span
            onClick={() => setSteps(true)}
            className="material-symbols-outlined cleanCart"
          >
            arrow_forward
          </span>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

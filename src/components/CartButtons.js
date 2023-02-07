import React from "react";
import { useCarrito } from "./CustomProvider";
import { Link } from "react-router-dom";

const CartButtons = () => {
  const { carrito, vaciarCarrito } = useCarrito();
  const totalCarrito = carrito
    .map((item) => item.cantidad * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="cartButtons">
      <div className="cartTotal">
        <p>
          Total: <span className="green">${totalCarrito}</span>
        </p>
        <span
          className="material-symbols-outlined cleanCart"
          onClick={vaciarCarrito}
        >
          remove_shopping_cart{" "}
        </span>
      </div>
      <Link to="/checkout">
        <div className="confirmedButton">
          <span className="confirmed">Confirmar Compra</span>
          <span className="material-symbols-outlined confirmed checkCart">
            done_all
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CartButtons;

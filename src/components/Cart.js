import React, { useState } from "react";
import { useCarrito } from "./CustomProvider";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { carrito, vaciarCarrito } = useCarrito();
  const [onCarrito, setOnCarrito] = useState(false);
  const navigate = useNavigate();
  Report.init({
    titleFontSize: "1.5em",
    messageFontSize: "1.2em",
    buttonFontSize: "1.2em",
    width: "500px",
  });

  useEffect(() => {
    if (carrito.length === 0 && !onCarrito) {
      Report.info(
        "Parece que no tienes productos",
        "Debes de añadir productos al carrito para realizar la compra",
        "Ver Productos",
        () => navigate("/")
      );
      setOnCarrito(false);
    } else setOnCarrito(true); //si tiene productos
  }, [carrito]);

  const totalCarrito = carrito
    .map((item) => item.cantidad * item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="cartContainer">
      {onCarrito ? (
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
      ) : null}
      <div className="cartItem__container">
        {carrito.map((itemCart) => (
          <CartItem key={itemCart.id} itemCart={itemCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

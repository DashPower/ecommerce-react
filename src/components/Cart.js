import React from "react";
import { useCarrito } from "./CustomProvider";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";
import { useNavigate } from "react-router-dom";
import CartButtons from "./CartButtons";

const Cart = () => {
  const { carrito, initCarrito } = useCarrito();
  const navigate = useNavigate();
  Report.init({
    titleFontSize: "1.5em",
    messageFontSize: "1.2em",
    buttonFontSize: "1.2em",
    width: "500px",
  });

  useEffect(() => {
    if (carrito.length === 0 && initCarrito) {
      Report.info(
        "Parece que no tienes productos",
        "Debes de añadir productos al carrito para realizar la compra",
        "Ver Productos",
        () => navigate("/")
      );
    } // eslint-disable-next-line
  }, [carrito, initCarrito]);

  return (
    <div className="cartContainer">
      {carrito.length !== 0 && initCarrito ? <CartButtons /> : null}
      <div className="cartItem__container">
        {carrito.map((itemCart) => (
          <CartItem key={itemCart.id} itemCart={itemCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;

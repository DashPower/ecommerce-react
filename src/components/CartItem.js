import { useCarrito } from "./CustomProvider";
import { useState } from "react";
import { toast } from "react-toastify";

const CartItem = ({ itemCart }) => {
  const { removeProduct, removeTotal } = useCarrito();
  const [resto, setResto] = useState(false);
  const restartItem = (item) => {
    item.cantidad = item.cantidad - 1;
    removeTotal(1);
    setResto(!resto);
    toast.warning("Cantidad Eliminada");
    if (item.cantidad === 0) {
      item.cantidad += 1;
      removeProduct(itemCart.id, itemCart.cantidad);
    }
  };

  return (
    <div
      className="cartItem animate__animated animate__fadeInRight animate__fast"
      key={itemCart.id}
      id={itemCart.id}
    >
      <img className="cartItem__img" src={itemCart.img} alt={itemCart.name} />
      <div className="cartItem__text">
        <h4>{itemCart.name}</h4>
        <p>
          {" "}
          Categorias:{" "}
          {itemCart.category.map((cat) => {
            return <span key={cat}> {cat} </span>;
          })}
        </p>
        <p>Precio: $ {itemCart.price}</p>
        <p>Cantidad: {itemCart.cantidad}</p>
        <p>Total Individual: $ {itemCart.price * itemCart.cantidad}</p>
        <div className="iconCart">
          <span
            className="material-icons cursor"
            onClick={() => {
              restartItem(itemCart);
            }}
          >
            remove
          </span>
          <span
            className="material-symbols-outlined"
            onClick={() => removeProduct(itemCart.id, itemCart.cantidad)}
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

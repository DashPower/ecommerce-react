import { React, useEffect, useState } from "react";
import { useCarrito } from "./CustomProvider";
import { toast } from "react-toastify";
const ItemCount = ({ precio, stock, item }) => {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(precio);
  const { onAdd, setCarrito, carrito } = useCarrito(0);

  function add(count = 1, item) {
    if (!carrito.some((e) => e.name === item.name)) {
      item.cantidad = count;
      setCarrito([...carrito, item]);
      toast.success("Producto añadido al carrito");
      onAdd(count);
    } else {
      const itemEncontrado = carrito.find((e) => e.name === item.name);
      const nuevoTotal = itemEncontrado.cantidad + count;
      if (nuevoTotal <= itemEncontrado.stock) {
        itemEncontrado.cantidad = nuevoTotal;
        const customId = "custom-id-yes";
        toast.success(`Cantidad añadida con exito`, { toastId: customId });
        onAdd(count);
      }
    }
  }

  function addCount() {
    if (count < stock) setCount(count + 1);
  }
  function removeCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  useEffect(() => {
    setValue(precio * count);
  }, [precio, count]);

  return (
    <div className="countbutton">
      <button className="botonescart material-icons" onClick={removeCount}>
        remove
      </button>
      <p className="counter">{count}</p>
      <button className="botonescart material-icons" onClick={addCount}>
        add
      </button>
      <button
        className="botonescart"
        onClick={() => {
          add(count, item);
        }}
      >
        Agregar al carrito
      </button>
      <p className="valuetotal">Total: ${value}</p>
    </div>
  );
};

export default ItemCount;

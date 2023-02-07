import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
const contexto = createContext();
const Provider = contexto.Provider;

export const useCarrito = () => {
  return useContext(contexto);
};
const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [totalProducto, setTotalProducto] = useState(0);
  const [initCarrito, setInitCarrito] = useState(false);

  let carritoString = localStorage.getItem("carrito");
  let carritoParseado = JSON.parse(carritoString);
  let totalProductoString = localStorage.getItem("totalProducto");
  let totalProductoParseado = JSON.parse(totalProductoString);

  useEffect(() => {
    if (carritoParseado) {
      setCarrito(carritoParseado);
    }
    if (totalProductoParseado) {
      setTotalProducto(totalProductoParseado);
    }
    setInitCarrito(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let carritoString = JSON.stringify(carrito);
    let totalProductoString = JSON.stringify(totalProducto);
    localStorage.setItem("totalProducto", totalProductoString);
    localStorage.setItem("carrito", carritoString);
  }, [carrito, totalProducto]);

  const vaciarCarrito = () => {
    setCarrito([]);
    setTotalProducto(0);
    toast.success("Carrito vaciado con exito");
  };

  const removeProduct = (id) => {
    const division = document.getElementById(id);
    division.classList.remove("animate__fadeInRight", "animate__fast");
    division.classList.add("animate__fadeOutRight", "animate__faster");
    setTimeout(() => {
      toast.success("Producto Eliminado");
      const item = carrito.find((item) => id === item.id);
      setTotalProducto(totalProducto - item.cantidad);
      item.cantidad = 0;
      const newCart = carrito.filter((item) => id !== item.id);
      setCarrito([...newCart]);
    }, 550);
  };
  const onAdd = (cantidad) => {
    setTotalProducto(totalProducto + cantidad);
  };
  const removeTotal = (cantidad) => {
    setTotalProducto(totalProducto - cantidad);
  };

  const valorDelContexto = {
    removeProduct,
    vaciarCarrito,
    onAdd,
    carrito,
    totalProducto,
    setCarrito,
    setTotalProducto,
    initCarrito,
    removeTotal,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;

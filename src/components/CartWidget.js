import { useCarrito } from "./CustomProvider"
function CartWidget(){
    const {totalProducto} = useCarrito()
    return(
        <div className="cart">
            <img src="/carritoicon.png" height="50" alt="Carrito"/>
            <div className="number" id="carrito">{ totalProducto }</div>
        </div>
    )

}

export default CartWidget
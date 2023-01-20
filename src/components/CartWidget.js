import { useCarrito } from "./CustomProvider"
function CartWidget(){
    const {totalProductos} = useCarrito()
    console.log(totalProductos)
    return(
        <>
        <div className="cart">
            <img src="/carritoicon.png" height="50" alt="Carrito"/>
            <div className="number" id="carrito">{totalProductos}</div>
            
        </div>
        </>
    )

}

export default CartWidget
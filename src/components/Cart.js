import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice"
import { clearCart } from "../utils/cartSlice.js";
const Cart = ()=>{

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    const cartItems = useSelector((store)=>store.cart.items)

    return <div className="border border-black text-center p-4 m-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className="px-3 py-1 bg-blue-200 rounded-lg m-2" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length===0 && <h1 className="font-semibold text-lg">Cart is empty!!!</h1>}
        <div className="w-6/12 m-auto"><ItemList items={cartItems}/></div>
    </div>
}

export default Cart;
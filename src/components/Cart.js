import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

            {cartItems.length === 0 ? (
                <h2 className="text-xl font-semibold text-gray-500">Your cart is empty. Please add items to your cart!</h2>
            ) : (
                <>
                    <div className="mb-4">
                        <ItemList items={cartItems} />
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
                            onClick={handleClearCart}
                        >
                            Clear Cart
                        </button>

                        <p className="text-lg font-medium text-gray-700">
                            Total items: <span className="font-bold">{cartItems.length}</span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

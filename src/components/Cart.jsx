import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
                <img src={item.images?.[0] || "https://via.placeholder.com/100"} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <h3 className="text-lg font-bold">Total Amount:</h3>
            <p className="text-xl font-bold text-blue-600">${totalAmount}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

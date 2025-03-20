import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-32 h-40 object-contain"
      />
      <h3 className="text-lg font-semibold mt-3 text-center">{product.title}</h3>
      <p className="text-green-600 font-bold mt-2">${product.price}</p>
      <button 
        onClick={() => addToCart(product)} 
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

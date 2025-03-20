import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-md shadow-md">
      <img 
        src={product.images?.[0] || "https://via.placeholder.com/150"} 
        alt={product.title} 
        className="h-40 w-full object-cover rounded-md" 
      />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-emerald-500 font-semibold">${product.price}</p>
      <div className="flex justify-between mt-2">
        <button 
          onClick={() => addToCart(product)} 
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

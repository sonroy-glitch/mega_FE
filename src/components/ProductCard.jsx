import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-[#0b0f0e] rounded-2xl border border-white/5 p-3
                 transition-all hover:-translate-y-2 hover:border-yellow-500/30 cursor-pointer"
    >
      <div className="relative h-48 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-32 object-contain transition-transform group-hover:scale-110"
        />
      </div>

      <div className="pt-4 space-y-3">
        <h3 className="text-gray-100 group-hover:text-yellow-400">
          {product.name}
        </h3>

        <div className="flex justify-between items-center">
          <span className="text-lg text-white">{product.price}</span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-yellow-400
                       text-white hover:text-black rounded-lg border border-white/10"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import products from "../data/productsData";
import { useCart } from "../context/CartContext";
import { Plus, Minus, ChevronRight, ShoppingCart, Cpu } from "lucide-react";
import AppBar from "../components/AppBar";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart, increaseQty, decreaseQty, cartItems } = useCart();

  const product = products.find((p) => p.id === Number(id));
  if (!product) return null;

  const cartItem = cartItems.find((i) => i.id === product.id);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      <AppBar />

      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 18.1 9.9l-7.9-7.9h-2.83zM32 0l-3.657 3.657-1.414-1.414L30.586 0H32zM28 0l3.657 3.657 1.414-1.414L29.414 0H28z' fill='%23eab308' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative group w-full h-full min-h-[400px]lg:min-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-50 border-r border-b border-yellow-500/30 pointer-events-none"></div>

            <div className="bg-neutral-950 p-12 flex justify-center items-center border-l-4 border-yellow-500 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>

              <img
                src={product.image}
                className="w-full h-auto max-h-[500px] object-contain relative z-10 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                alt={product.name}
              />

              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500"></div>
            </div>
          </div>

          <div className="space-y-8 pt-6">
            <div>
              <div className="flex items-center gap-2 mb-4 opacity-70">
                <Cpu className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 font-mono text-xs uppercase tracking-[0.2em]">
                  High-Performance Robotics
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl text-white leading-none uppercase">
                {product.name}
              </h1>
            </div>

            <div className="border-b-2 border-neutral-800 pb-6">
              <p className="text-4xl font-mono font-bold text-yellow-500 inline-block px-4 py-1 bg-yellow-500/10 border-l-2 border-yellow-500">
                {product.price}
              </p>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed border-l-4 border-neutral-800 pl-6">
              {product.description}
            </p>

            <div className="py-6">
              <h3 className="text-white font-mono uppercase tracking-wider mb-4 text-sm font-bold flex items-center gap-2">
                <span className="h-1 w-4 bg-yellow-500"></span> Technical
                Specifications
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.specs.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-neutral-300 font-mono text-sm bg-neutral-900/50 p-3 border-l border-yellow-500/30"
                  >
                    <ChevronRight className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              {!cartItem ? (
                <button
                  onClick={() => addToCart(product)}
                  className="relative w-full md:w-auto min-w-[250px] px-10 py-5 text-base uppercase tracking-[0.2em] font-bold text-black cursor-pointer group"
                >
                  <span className="absolute inset-0 -skew-x-12 bg-yellow-500 border-2 border-yellow-500 group-hover:bg-yellow-400 transition-colors duration-300"></span>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </span>
                </button>
              ) : (
                <div className="flex flex-col gap-2">
                  <span className="text-neutral-500 font-mono text-xs uppercase tracking-wider">
                    Quantity Selected:
                  </span>
                  <div className="flex items-center border-2 border-neutral-800 bg-black w-fit">
                    <button
                      onClick={() => decreaseQty(product.id)}
                      className="p-5 text-neutral-400 hover:text-yellow-500 hover:bg-neutral-900 transition-colors border-r-2 border-neutral-800 active:bg-yellow-500/20"
                    >
                      <Minus className="w-6 h-6" />
                    </button>
                    <span className="px-8 font-mono text-2xl font-bold text-yellow-500 tabular-nums min-w-[80px] text-center">
                      {cartItem.qty}
                    </span>
                    <button
                      onClick={() => increaseQty(product.id)}
                      className="p-5 text-neutral-400 hover:text-yellow-500 hover:bg-neutral-900 transition-colors border-l-2 border-neutral-800 active:bg-yellow-500/20"
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/productsData";
import Footer from "../components/Footer";
import { Cpu, ShoppingCart, ArrowUpDown, Home } from "lucide-react";
import { useCart } from "../context/CartContext";
import SmoothScroll from "../components/SmoothScroll";

export default function Store() {
  const [sort, setSort] = useState("none");
  const navigate = useNavigate();
  const { totalItems } = useCart();
  useEffect(()=>{
    let signin=localStorage.getItem('user')
    if (signin){
      
    }
    else{
      navigate('/signin')
    }
  },[])
  let sortedProducts = [...products].sort((a, b) => {
    const pa = parseInt(a.price.replace("₹", ""));
    const pb = parseInt(b.price.replace("₹", ""));
    if (sort === "low") return pa - pb;
    if (sort === "high") return pb - pa;
    return 0;
  });
   sortedProducts = sortedProducts.filter(product => product.category=='diy_kits');
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-gray-100 relative font-sans selection:bg-yellow-500/30">
        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none fixed"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 18.1 9.9l-7.9-7.9h-2.83zM32 0l-3.657 3.657-1.414-1.414L30.586 0H32zM28 0l3.657 3.657 1.414-1.414L29.414 0H28z' fill='%23eab308' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none fixed"></div>

        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div
                className="p-2.5 rounded-xl text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-transform group-hover:scale-105"
                style={{ backgroundColor: "rgb(234, 179, 8)" }}
              >
                <Cpu size={22} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl     tracking-tight text-white leading-none">
                  Electro
                  <span className="text-yellow-500">Store</span>
                </h1>
                <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] font-mono mt-0.5">
                  Build • Code • Create
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => navigate("/")}
                className="p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-500 hover:bg-neutral-800 text-neutral-300 hover:text-yellow-500 transition-all duration-300 group"
                title="Home"
              >
                <Home
                  size={20}
                  className="group-hover:stroke-current transition-colors"
                />
              </button>

              <div className="hidden sm:flex items-center gap-2 text-sm bg-neutral-900/80 border border-neutral-800 hover:border-yellow-500/50 rounded-full px-4 py-2 transition-all duration-300">
                <ArrowUpDown size={14} className="text-yellow-500" />
                <select
                  onChange={(e) => setSort(e.target.value)}
                  className="bg-transparent border-none outline-none text-neutral-300 cursor-pointer text-xs font-mono uppercase tracking-wide focus:ring-0"
                >
                  <option value="none" className="bg-neutral-900">
                    Sort By
                  </option>
                  <option value="low" className="bg-neutral-900">
                    Price: Low → High
                  </option>
                  <option value="high" className="bg-neutral-900">
                    Price: High → Low
                  </option>
                </select>
              </div>

              <button
                onClick={() => navigate("/cart")}
                className="relative p-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-yellow-500 hover:bg-neutral-800 text-neutral-300 hover:text-yellow-500 transition-all duration-300 group"
              >
                <ShoppingCart
                  size={20}
                  className="group-hover:fill-current transition-colors"
                />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-1.5 -right-1.5 bg-yellow-500 text-black
                                 text-[10px]   h-5 w-5 flex items-center justify-center rounded-full shadow-lg"
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="sm:hidden px-6 pb-4 border-t border-white/5 pt-3">
            <div className="flex items-center gap-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2">
              <ArrowUpDown size={14} className="text-yellow-500" />
              <select
                onChange={(e) => setSort(e.target.value)}
                className="bg-transparent border-none outline-none text-neutral-300 w-full text-xs font-mono uppercase"
              >
                <option value="none" className="bg-neutral-900">
                  Sort By
                </option>
                <option value="low" className="bg-neutral-900">
                  Price: Low → High
                </option>
                <option value="high" className="bg-neutral-900">
                  Price: High → Low
                </option>
              </select>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <div className="mb-12 flex items-end gap-6">
            <h2 className="text-3xl md:text-5xl     text-white leading-none">
              Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Components
              </span>
            </h2>
            <div className="h-2 w-full flex-1 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-full mb-2" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {sortedProducts.map((product ) => (
                // if (product.category=='diy_kits'){
              <ProductCard key={product.id} product={product} />
                // }
))}
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

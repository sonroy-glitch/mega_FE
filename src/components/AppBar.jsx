import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/appbar-logo.png";

export default function AppBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 lg:px-10 py-3">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => go("/")}
        >
          <img
            src={logo}
            alt="logo"
            className="h-9 lg:h-10 w-auto object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-lg">
          <span
            onClick={() => go("/")}
            className="cursor-pointer text-white hover:text-blue-500 transition-colors"
          >
            HOME
          </span>

          <span
            onClick={() => go("/about")}
            className="cursor-pointer text-white hover:text-blue-500 transition-colors"
          >
            ABOUT
          </span>
          
          <button
            onClick={() => go("/store")}
            className="relative px-8 py-2 text-sm uppercase tracking-widest font-semibold text-black cursor-pointer"
          >
            <span className="absolute inset-0 -skew-x-12 bg-yellow-400 border border-yellow-500"></span>
            <span className="relative z-10 block">Buy Products</span>
          </button>
          {
            localStorage.getItem('user')?
             <span
            onClick={() => {
              localStorage.removeItem('user')
              location.reload()
            }}
            className="cursor-pointer text-white hover:text-blue-500 transition-colors"
          >
            Signout
          </span>:null
          }
         
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/90 border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-6 text-base">
            <span
              onClick={() => go("/")}
              className="text-white hover:text-blue-500 transition"
            >
              HOME
            </span>

            <span
              onClick={() => go("/about")}
              className="text-white hover:text-blue-500 transition"
            >
              ABOUT
            </span>

            <button
              onClick={() => go("/store")}
              className="relative mt-2 px-6 py-3 text-sm uppercase tracking-widest font-semibold text-black"
            >
              <span className="absolute inset-0 -skew-x-12 bg-yellow-400 border border-yellow-500"></span>
              <span className="relative z-10 block text-center">
                Buy Products
              </span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

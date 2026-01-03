import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import axios from 'axios'
import {
  Plus,
  Minus,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Package,
  ShieldCheck,
  X,
  CheckCircle2,
  QrCode
} from "lucide-react";

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, clearCart } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const total = cartItems.reduce(
    (sum, i) => sum + parseInt(i.price.replace("₹", "")) * i.qty,
    0
  );
  const [check,setCheck]=useState(true)
  const upiId = 'megahertzrobotics@ybl'; 
  const qrUrl = `https://quickchart.io/qr?text=upi%3A%2F%2Fpay%3Fpa%3D${upiId}%26am%3D${total}%26cu%3DINR&size=300`;

  async function checkout() {
    setIsCheckoutOpen(true);
    //send a axios request to the merchant id 
    let cart=localStorage.getItem('megahertz_cart')
    let user=JSON.parse(localStorage.getItem('user'))
    var response =await axios.post('https://mega-be.vercel.app/verify',{
      email:user.email,
      amount:total,
      cart:cart
    })
    setCheck(false)
    localStorage.removeItem('megahertz_cart')
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 relative font-sans selection:bg-yellow-500/30">
      
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none fixed"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 18.1 9.9l-7.9-7.9h-2.83zM32 0l-3.657 3.657-1.414-1.414L30.586 0H32zM28 0l3.657 3.657 1.414-1.414L29.414 0H28z' fill='%23eab308' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
        <div className="flex items-center gap-4 mb-10 border-b border-white/10 pb-6">
          <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 shadow-[0_0_15px_-5px_rgba(234,179,8,0.3)]">
            <ShoppingBag className="text-yellow-500" size={24} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl text-white">
              Your <span className="text-yellow-500">Cart</span>
            </h1>
            <p className="text-sm text-neutral-500 font-mono mt-1">
              Review your {cartItems.length} items before checkout
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 border border-dashed border-neutral-800 rounded-3xl bg-neutral-900/30 backdrop-blur-sm">
            <div className="p-6 bg-neutral-900 rounded-full mb-6 border border-neutral-800">
              <Package size={48} className="text-neutral-600" />
            </div>
            <p className="text-white text-xl">Your cart is empty.</p>
            <p className="text-neutral-500 text-sm mt-2 font-mono">
              Start adding components to build something cool.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-neutral-900/50 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg text-white group-hover:text-yellow-400 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-neutral-400 font-mono mt-1 flex items-center gap-2">
                        Unit Price:{" "}
                        <span className="text-yellow-500">{item.price}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-4 bg-black p-1.5 rounded-lg border border-neutral-800 shadow-inner">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="p-2 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all active:scale-95"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-8 text-center font-mono text-white">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="p-2 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all active:scale-95"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={clearCart}
                className="flex items-center gap-2 text-neutral-500 hover:text-red-400 transition-colors text-sm font-medium px-2"
              >
                <Trash2 size={14} />
                <span>Clear Shopping Cart</span>
              </button>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl sticky top-28">
                <h3 className="text-white text-xl mb-6 pb-4 border-b border-neutral-800">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-neutral-400 text-sm">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400 text-sm">
                    <span>Shipping</span>
                    <span className="text-green-500 font-mono text-xs uppercase">
                      Free
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-400 text-sm">
                    <span>Tax (Estimated)</span>
                    <span>₹0</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 border-t border-dashed border-neutral-700 mb-6">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-3xl font-mono text-yellow-500 tracking-tight">
                    ₹{total}
                  </span>
                </div>

                <button 
                  className="w-full group relative px-6 py-4 bg-yellow-500 text-black uppercase tracking-wider rounded-xl overflow-hidden hover:shadow-[0_0_20px_-5px_rgba(234,179,8,0.5)] transition-all duration-300" 
                  onClick={checkout}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Checkout Securely{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>

                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-neutral-600 text-[10px] uppercase tracking-widest">
                  <ShieldCheck size={12} />
                  <span>Secure Encrypted Payment </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

   
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
            
          ></div>
        
          
          
    
          <div className="relative z-10 bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            
            <div className="bg-neutral-800/50 p-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-2 text-yellow-500">
                <QrCode size={18} />
                <span className="font-mono text-sm uppercase tracking-wider">Payment Gateway</span>
              </div>
              {
          check?
          null
          :
              <button 
                onClick={() => setIsCheckoutOpen(false)}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>}
            </div>

      
            <div className="p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl text-white mb-1">Scan to Pay</h3>
              <p className="text-yellow-500 font-mono text-xl mb-6">₹{total}</p>

            
              <div className="p-4 bg-white rounded-xl mb-6 shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]">
                <img 
                  src={qrUrl} 
                  alt="Payment QR" 
                  className="w-48 h-48 object-contain"
                />
              </div>

     
              <div className="space-y-4">
                 <div className="flex items-start gap-3 text-left p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <div className="text-sm">
                      <p className="text-green-200 font-medium">Payment Processing</p>
                      {
                        check?
                        null
                        :<p className="text-green-500/80 leading-snug mt-1">You can close this page on payment. A confirmation mail will shortly reach you.</p>
                    
                      }
                      </div>
                      
                 </div>
              </div>
            </div>

        
            <div className="bg-neutral-950 p-4 text-center border-t border-white/5">
               <p className="text-xs text-neutral-600 font-mono uppercase">Merchant: {upiId}</p>
            </div>
          </div>
        </div>
      )}
      

    </div>
  );
}
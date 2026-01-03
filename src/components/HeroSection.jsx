import heroImage from "../assets/hero.jpg";
import { useNavigate  } from "react-router-dom";
const HeroSection = () => {
  const navigate=useNavigate()
  return (
    <section className="mx-auto max-w-10xl px-6 py-10">
      <div className="relative h-[50vh] overflow-hidden rounded-xl">
        <img
          src={heroImage}
          alt="Megahertz Robotics"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center px-10 md:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-serif tracking-tighert">
              MegaHertz Robotics
            </h1>

            <p className="mt-4 text-lg text-blue-300 font-mono">
              Tech For Good
            </p>

            <div className="mt-8">
              <button className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black" onClick={()=>navigate('/store')}>
                Buy Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

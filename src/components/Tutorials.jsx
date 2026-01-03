import React from "react";
import { Play, ExternalLink, Youtube } from "lucide-react";

import t1 from "../assets/tutorials/t1.webp";
import t2 from "../assets/tutorials/t2.webp";
import t3 from "../assets/tutorials/t3.webp";
import t4 from "../assets/tutorials/t4.webp";

import tutorialsBg from "../assets/bg1.jpg";

const tutorials = [
  {
    id: 1,
    title: "Music reactive LEDs || Sound sensor - Arduino Connections & Coding",
    url: "https://youtu.be/H7bFOT_te1w?si=a5ykMEVfYfZ_f7HE",
    image: t1,
    duration: "10:05",
  },
  {
    id: 2,
    title:
      "How to make a wifi controlled car using Nodemcu ESP8266 and NEW Blynk App",
    url: "https://youtu.be/0zyFFlo_s1M?si=-KaInhL0qpXogMCq",
    image: t2,
    duration: "15:30",
  },
  {
    id: 3,
    title:
      "My School Exhibition Project || Unmanned Surveillance Vehicle (U.S.V)",
    url: "https://youtu.be/M9kFHUzgVvU?si=dRsPVhIu3-786_TI",
    image: t3,
    duration: "08:45",
  },
  {
    id: 4,
    title: "GAS Leakage Detector using Arduino Nano / UNO || MQ5 Sensor",
    url: "https://youtu.be/ehIjyUO3Uro?si=aIAw0Anp3Ur6HmWq",
    image: t4,
    duration: "12:20",
  },
];

const Tutorials = () => {
  return (
    <section className="relative max-w-[1850px] mx-auto rounded-2xl overflow-hidden mb-20">
      <img
        src={tutorialsBg}
        alt="Tutorials background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-blue-500/20 rounded-full mb-4">
              <Youtube className="w-5 h-5 text-blue-400" />
            </div>

            <h2 className="text-4xl font-bold text-white tracking-tight">
              Latest <span className="text-blue-400">Tutorials</span>
            </h2>

            <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
              Learn robotics and electronics with our step-by-step video guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tutorials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-neutral-900 rounded-2xl shadow-lg transition-all duration-300 border border-white/10 overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-5 h-5 text-blue-600 ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs text-white">
                    {item.duration}
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-5">
                  <span className="mb-3 inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-500/20 text-blue-400 border border-blue-400/30">
                    MegaHertz Robotics
                  </span>

                  <h3 className="text-lg font-bold text-gray-100 leading-snug line-clamp-2 group-hover:text-blue-400 transition mb-3">
                    {item.title}
                  </h3>

                  <div className="mt-auto flex items-center text-sm text-gray-400 group-hover:text-blue-400 transition">
                    <span>Watch Tutorial</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <a
          href="https://www.youtube.com/@TechieLagan/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-10 text-blue-400 hover:underline"
        >
          See more tutorials
        </a>
      </div>
    </section>
  );
};

export default Tutorials;

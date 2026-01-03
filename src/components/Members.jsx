import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import linkedinLogo from "../assets/li-logo.png";
import { members } from "../data/membersData";

const Members = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-white tracking-wider uppercase text-sm">
            The Team
          </span>
          <h2
            className="text-4xl md:text-5xl  "
            style={{ color: "rgb(230, 253, 136)" }}
          >
            Meet Our Members
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-16"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id} className="pt-15 px-2 !h-auto">
              <div className="group relative bg-blue-200 rounded-3xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="p-1.5 bg-white rounded-full shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-24 w-24 rounded-full  border-4 border-blue-50"
                    />
                  </div>
                </div>

                <div className="mt-12 text-center flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-6">
                    {member.role}
                  </p>

                  <div className="relative bg-gray-50 rounded-xl p-6 mb-6 flex-grow flex flex-col justify-center">
                    <Quote className="absolute top-4 left-4 w-6 h-6 text-blue-200 opacity-50 transform -scale-x-100" />
                    <p className="text-gray-600 italic text-sm leading-relaxed relative z-10">
                      "{member.quote}"
                    </p>
                  </div>

                  {member.linkedin && (
                    <div className="mt-auto flex justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-blue-300 transition-all group/btn"
                      >
                        <img
                          src={linkedinLogo}
                          alt="LinkedIn"
                          className="h-5 w-5"
                        />
                        <span className="text-sm font-medium text-gray-600 group-hover/btn:text-blue-700">
                          Connect
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Members;

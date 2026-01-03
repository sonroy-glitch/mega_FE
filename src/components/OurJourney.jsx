import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Trophy,
  Rocket,
  Cpu,
  MapPin,
  Flag,
  ArrowDown,
} from "lucide-react";

const timelineData = [
  {
    date: "24th Dec 2023",
    title: "KREATIVITY'23 Project Expo",
    description:
      "Participated in project expo organized by School of Electronics KIIT University.",
    location: "KIIT University",
    icon: <Cpu className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "14 - 16 Feb 2024",
    title: "KIIT Fest 2024",
    description: "Participated in Line Follower & Bot Burnout events.",
    location: "KIIT University",
    icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "10 - 12 March 2024",
    title: "WISSENAIRE'24",
    description:
      "Participated in Line Follower & Robo Race events (Fest of IIT Bhubaneswar).",
    location: "IIT Bhubaneswar",
    icon: <Rocket className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "18 - 20 March 2024",
    title: "Perception'24",
    description:
      "Participated in Line Follower & Robo Race events (Fest of OUTR Bhubaneswar).",
    location: "OUTR Bhubaneswar",
    icon: <Rocket className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "8 - 10 Nov 2024",
    title: "Innovision'24",
    description:
      "Participated in Death Race and Robo Race events (Fest of NIT Rourkela).",
    location: "NIT Rourkela",
    icon: <Trophy className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "5 Dec 2024",
    title: "KI-3 Event (Ideation)",
    description:
      "Participated in Ideation Category organized by KIIT School of Electronics & Dean's Gold Club.",
    location: "KIIT School of Electronics",
    icon: <Cpu className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "6 Dec 2024",
    title: "Science Mela (Yuva Utsav)",
    description: "Participated in District level Yuva Utsav organized by NSS.",
    location: "NSS District Level",
    icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" />,
  },
  {
    date: "24th Dec 2024",
    title: "Website Launch",
    description: "Launched the official website of MegaHertz Robotics.",
    location: "MegaHertz Robotics",
    icon: <Flag className="w-4 h-4 md:w-5 md:h-5" />,
  },
];

const ContentCard = ({ data }) => (
  <div className="relative group p-4 md:p-5 bg-neutral-900 border border-neutral-800 hover:border-yellow-500/50 rounded-lg transition-all duration-300 hover:shadow-[0_4px_20px_rgba(234,179,8,0.1)] w-full h-full flex flex-col justify-between backdrop-blur-sm bg-opacity-90">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div>
      <div className="inline-flex items-center gap-2 mb-2 md:mb-3 px-2 md:px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
        <Calendar className="w-3 h-3 text-yellow-500" />
        <span className="text-yellow-500 font-mono text-[9px] md:text-[10px] tracking-wider uppercase">
          {data.date}
        </span>
      </div>
      <h3 className="text-base md:text-lg text-white mb-1 md:mb-2 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
        {data.title}
      </h3>
      <p className="text-neutral-400 text-[10px] md:text-xs leading-relaxed font-sans mb-2 md:mb-3 line-clamp-3">
        {data.description}
      </p>
    </div>
    <div className="flex items-center gap-1.5 text-[9px] md:text-[10px] text-neutral-500 font-medium mt-auto">
      <MapPin className="w-3 h-3" />
      <span className="truncate">{data.location}</span>
    </div>
  </div>
);

const TimelineItemHorizontal = ({ data, index }) => {
  const isEven = index % 2 === 0;
  const cardVariants = {
    hidden: { opacity: 0, y: isEven ? -20 : 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-[260px] md:w-[350px] mx-2 md:mx-4 relative z-10 shrink-0 h-[380px] md:h-[450px]">
      <div className="h-[170px] md:h-[200px] w-full flex items-end pb-4 md:pb-6">
        {isEven && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            variants={cardVariants}
            className="w-full h-full"
          >
            <ContentCard data={data} />
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative z-20 flex items-center justify-center shrink-0"
      >
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "30px" }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.4 }}
          className={`absolute w-[2px] bg-neutral-700 left-1/2 -translate-x-1/2 ${
            isEven ? "bottom-full" : "top-full"
          } -z-10 origin-bottom`}
        />
        <div className="w-10 h-10 md:w-12 md:h-12 bg-black border-[3px] border-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.4)] relative z-20 bg-opacity-100">
          <div className="text-yellow-500 transform scale-75">{data.icon}</div>
        </div>
      </motion.div>

      <div className="h-[170px] md:h-[200px] w-full flex items-start pt-4 md:pt-6">
        {!isEven && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            variants={cardVariants}
            className="w-full h-full"
          >
            <ContentCard data={data} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const OurJourney = () => {
  const targetRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  const calculateWidth = () => {
    if (cardsContainerRef.current) {
      const totalWidth = cardsContainerRef.current.scrollWidth;
      const clientWidth = window.innerWidth;
      const paddingOffset = clientWidth * 0.05;
      const range = totalWidth - clientWidth + paddingOffset + 200;
      setScrollRange(-range);
    }
  };

  useEffect(() => {
    calculateWidth();

    window.addEventListener("resize", calculateWidth);
    return () => window.removeEventListener("resize", calculateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0px", `${scrollRange}px`]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <section ref={targetRef} className="relative w-full h-[400vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>

        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-8 md:top-20 left-0 right-0 text-center z-30 px-4"
        >
          <h2 className="text-3xl md:text-5xl text-white mb-2 md:mb-4">
            OUR <span className="text-yellow-500">JOURNEY</span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-yellow-500 mx-auto mb-2 md:mb-4" />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex flex-col items-center justify-center text-yellow-500/80 font-mono text-[10px] md:text-sm uppercase tracking-widest mt-4 md:mt-8"
          >
            <p className="mb-2">Scroll down to explore</p>
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ x }}
          className="flex items-center relative z-10 pl-[5vw] pt-24 md:pt-0"
        >
          <div ref={cardsContainerRef} className="flex items-center">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 h-[2px] bg-neutral-800/50 w-full -z-10" />

            {timelineData.map((item, index) => (
              <TimelineItemHorizontal key={index} data={item} index={index} />
            ))}

            <div className="w-[300px] md:w-[200px] shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;

import { Linkedin, Quote, Users, Minus } from "lucide-react";
import { members } from "../data/membersData";
import AppBar from "../components/AppBar";

const MemberCard = ({ member }) => {
  return (
    <div className="group relative flex flex-col bg-neutral-950 border-l-2 border-neutral-800 hover:border-yellow-500 overflow-hidden transition-all duration-500">
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-yellow-500 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20 bg-neutral-950/90 backdrop-blur-sm -mt-4 pt-8 border-t border-neutral-800/50">
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-500/30 group-hover:border-yellow-500 transition-colors duration-500"></div>

        <div className="flex items-center gap-2 mb-2">
          <Minus className="w-4 h-4 text-yellow-500" />
          <span className="text-yellow-500 font-mono text-xs uppercase tracking-widest font-bold">
            {member.role}
          </span>
        </div>

        <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
          {member.name}
        </h3>

        <div className="relative pl-6 mb-6 flex-grow border-l border-neutral-800 group-hover:border-yellow-500/50 transition-colors duration-300">
          <Quote className="w-8 h-8 text-neutral-700 absolute -top-4 -left-4 opacity-30 z-0 transform -scale-x-100" />
          <p className="text-neutral-400 text-sm italic leading-relaxed relative z-10">
            "{member.quote}"
          </p>
        </div>

        <div className="mt-auto pt-4 flex justify-start">
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white hover:text-yellow-400 transition-all duration-300 group/link"
            >
              <div className="p-2 bg-blue-600 border border-neutral-800 group-hover/link: transition-colors rounded-xl">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider">
                LINKEDIN
              </span>
            </a>
          ) : (
            <div className="flex items-center gap-3 text-neutral-600 opacity-60 cursor-not-allowed">
              <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-sm">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider">
                UNAVAILABLE
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <AppBar />

      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 18.1 9.9l-7.9-7.9h-2.83zM32 0l-3.657 3.657-1.414-1.414L30.586 0H32zM28 0l3.657 3.657 1.414-1.414L29.414 0H28z' fill='%23eab308' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
        <div className="mb-20 max-w-3xl pt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 bg-yellow-500"></div>
            <span className="text-yellow-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">
              THE TEAM
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-8 uppercase leading-none">
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-700">
              Minds
            </span>
            <br />
            Behind the Machines
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed border-l-4 border-yellow-500/30 pl-6 max-w-xl">
            We are a collective of engineers, innovators, and dreamers dedicated
            to pushing the boundaries of robotics technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="mt-32 border-t-2 pt-12 flex justify-between items-center">
          <div className="flex items-center gap-3 text-neutral-600 font-mono text-xs uppercase tracking-widest font-bold">
            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
            <span>MegaHertz Core • Est. 202X</span>
          </div>
          <Users className="w-6 h-6 text-neutral-800" />
        </div>
      </div>
    </div>
  );
};

export default About;

import { Cpu, ImageIcon } from "lucide-react";
import AppBar from "../components/AppBar";

import project1 from "../assets/projects/1.jpeg";
import project2 from "../assets/projects/2.jpeg";
import project3 from "../assets/projects/3.jpeg";
import project4 from "../assets/projects/4.jpeg";

// Add more projects here: { id, title, image }
const projects = [
  { id: 1, title: "Enclosure Builds", image: project1 },
  { id: 2, title: "Multi-Antenna RF Board", image: project2 },
  { id: 3, title: "Stacked Sensor Rig", image: project3 },
  { id: 4, title: "Power & Sensing Stack", image: project4 },
];

const Projects = () => {
  return (
    <div className="min-h-screen relative bg-black overflow-hidden">
      <AppBar />

      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 py-24 relative z-20">
        <div className="mb-20 max-w-3xl pt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 bg-yellow-500"></div>
            <span className="text-yellow-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">
              THE WORK
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-8 uppercase leading-none">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-700">
              Projects
            </span>
          </h1>
          <h1 className="text-white pb-10 text-4xl font-bold text-yellow-500">
            VAYU
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed border-l-4 border-yellow-500/30 pl-6 max-w-xl">
            A look at the machines we have designed, built, and battle-tested.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-neutral-950 border-l-2 border-neutral-800 hover:border-yellow-500 overflow-hidden transition-all duration-500"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6 bg-neutral-950/90 backdrop-blur-sm">
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-neutral-800 py-32 flex flex-col items-center justify-center gap-4">
            <ImageIcon className="w-10 h-10 text-neutral-700" />
            <span className="text-neutral-600 font-mono text-xs uppercase tracking-widest">
              Project pictures coming soon
            </span>
          </div>
        )}

        <div className="mt-32 border-t-2 pt-12 flex justify-between items-center">
          <div className="flex items-center gap-3 text-neutral-600 font-mono text-xs uppercase tracking-widest font-bold">
            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>
            <span>MegaHertz Core • Est. 202X</span>
          </div>
          <Cpu className="w-6 h-6 text-neutral-800" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

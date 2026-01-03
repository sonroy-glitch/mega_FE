import footerBg from "../assets/footerbg.jpg";
import footerImg from "../assets/footerimg.png";

import mailIcon from "../assets/icons/mail.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import facebookIcon from "../assets/icons/facebook.webp";
import youtubeIcon from "../assets/icons/youtube.png";
import instagramIcon from "../assets/icons/instagram.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full text-white bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt="Footer background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center md:items-start">
          <div className="md:col-span-4 flex flex-col items-center md:items-start space-y-4">
            <img
              src={footerImg}
              alt="Megahertz Robotics"
              className="w-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-300 text-sm text-center md:text-left max-w-xs drop-shadow-md">
              Innovating the future with advanced robotics and engineering
              solutions.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-xl tracking-wider text-yellow-500 uppercase border-b-2 border-yellow-500/30 pb-2 inline-block drop-shadow-lg">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-200 font-medium">
              {["Buy Products", "Want to build projects", "Rentals"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:text-yellow-400 hover:translate-x-2 drop-shadow-md"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 group-hover:w-3 transition-all"></span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-xl tracking-wider text-yellow-500 uppercase border-b-2 border-yellow-500/30 pb-2 inline-block drop-shadow-lg">
              Get In Touch
            </h3>
            <p className="text-gray-300 text-sm mb-6 text-center md:text-left drop-shadow-md">
              Follow us on social media for updates and robotic innovations.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {[
                {
                  icon: mailIcon,
                  link: "mailto:megahertzrobotics@gmail.com",
                  alt: "Email",
                },
                {
                  icon: linkedinIcon,
                  link: "https://www.linkedin.com/company/megahertz-robotics/",
                  alt: "LinkedIn",
                },
                {
                  icon: facebookIcon,
                  link: "https://www.facebook.com/people/Alpha-Codes/pfbid02GEyoutcwLiNeQHQBPq5tP7b1U2Ai5Pk8DhNmiNg8pCoH5zTjnhLt5PpgPfa6q3JTl/?mibextid=JRoKGi",
                  alt: "Facebook",
                },
                {
                  icon: youtubeIcon,
                  link: "https://www.youtube.com/c/TechieLagan",
                  alt: "YouTube",
                },
                {
                  icon: instagramIcon,
                  link: "https://www.instagram.com/megahertz_robotics/",
                  alt: "Instagram",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full backdrop-blur-md hover:bg-yellow-500 hover:scale-110 transition-all duration-300 shadow-lg border border-white/10"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className="h-6 w-6 object-fit  drop-shadow-sm"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50 text-center relative">
          <p className="text-gray-400 text-sm drop-shadow-md">
            &copy; {currentYear}{" "}
            <span className="text-yellow-500 font-semibold">
              Megahertz Robotics
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

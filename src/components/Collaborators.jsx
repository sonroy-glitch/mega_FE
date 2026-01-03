import img1 from "../assets/collaborators/img1.png";
import img2 from "../assets/collaborators/img2.png";
import img3 from "../assets/collaborators/img3.jpg";

const collaborators = [
  { id: 1, name: "AlphaCodes", image: img1, dark: true },
  { id: 2, name: "KIIT Electrical Society", image: img2, dark: true },
  { id: 3, name: "Skill-O-Karm", image: img3, dark: true },
];

const Collaborators = () => {
  return (
    <section className="w-full px-6 py-3">
      <div className="mx-auto max-w-10xl p-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <h2
            className="font-serif font-light tracking-wide text-white
               text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            COLLABORATIONS
          </h2>

          <div className="flex gap-10">
            {collaborators.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div
                  className={`h-28 w-28 rounded-2xl border flex items-center justify-center
                    ${
                      item.dark
                        ? "bg-black border-black"
                        : "border-gray-300 bg-white"
                    }
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                </div>

                <p className="mt-3 text-sm font-medium text-white  text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;

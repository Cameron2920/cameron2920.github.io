import ImLost from "./assets/je-suis-perdu.jpg";
import GameFace from "./assets/gameface.jpg";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* Section title */}
      <h1 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
        About Me
      </h1>

      <div className="flex flex-col items-center gap-12">
        {/* Text content */}
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Hi, I’m <span className="font-semibold text-gray-900">Cameron 👋</span> —
            a senior software engineer with a passion for building reliable, scalable systems.
            I’ve worked across backend, frontend, mobile, desktop, embedded,
            and large-scale distributed systems.
            <span className="text-blue-600 font-medium"> You name it, I’ve probably built it!</span>
          </p>

          <p>
            Outside of work, you’ll usually find me{" "}
            <span className="italic">cycling</span> to small towns,{" "}
            <span className="italic">climbing</span> up rocks,{" "}
            <span className="italic">snowboarding</span> down mountains, or
            battling it out in <span className="font-semibold">Magic: the Gathering</span>.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Cameron2920"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/cameron-ramsay-a331a136a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="https://stackoverflow.com/users/3845809/cameron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-800 transition"
              aria-label="Stack Overflow"
            >
              <FaStackOverflow className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <figure className="relative w-full max-w-md">
            <img
              src={ImLost}
              alt="Cycling trip"
              className="rounded-3xl shadow-xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            />
            <figcaption className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm text-gray-700 shadow-md">
              Ottawa / Montreal trip
            </figcaption>
          </figure>

          <figure className="relative w-full max-w-sm">
            <img
              src={GameFace}
              alt="Game face"
              className="rounded-2xl shadow-lg cursor-pointer hover:rotate-1 hover:scale-[1.03] transition-transform duration-300"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Focus mode
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

import ImLost from "./assets/je-suis-perdu.jpg";
import GameFace from "./assets/gameface.jpg";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Text content */}
        <div className="space-y-4">
          <p>
            Hi, I’m Cameron 👋 — a senior software engineer with a passion for
            building reliable, scalable systems. I’ve worked on backend, frontend,
            mobile, desktop, embedded, large scale, small scale and the list goes on.
            You name it, and I've probably worked on it!
          </p>
          <p>
            Outside of work, you’ll usually find me cycling to small towns,
            climbing up rocks, snowboarding/skiing and playing Magic the Gathering.
          </p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-2 gap-4">
          <figure>
            <img
              src={ImLost}
              alt="Cycling"
              className="rounded-2xl shadow-md cursor-pointer hover:opacity-90"
            />
            <figcaption className="text-sm text-gray-600 mt-2">
              Ottawa/Montreal roundtrip
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

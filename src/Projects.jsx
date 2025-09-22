import { useState } from "react";
import { ImageModal } from "./ImageModal.jsx";
import ProjectImages from "./ProjectImages.jsx";
import CycleLogScreenshot1 from "./assets/cycle-log-screenshot-1.png";
import CycleLogScreenshot2 from "./assets/cycle-log-screenshot-2.png";
import CycleMapRoute from "./assets/cycle-map-route.png";
import CycleMapNavigation from "./assets/cycle-map-navigation.png";
import CycleMapSearch from "./assets/cycle-map-search.png";

function SectionList({ title, items, images, onOpen }) {
  if (!items || items.length === 0) return null;

  // Special styling for links section
  if (title.toLowerCase() === "links") {
    return (
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {items.map((link, idx) => {
            const label = link.toLowerCase().includes("github")
              ? "GitHub"
              : "Live Demo";

            return (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium shadow hover:shadow-md hover:from-blue-700 hover:to-cyan-700 transition"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  // Default sections
  return (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">{title}</h4>
      <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
        {items.map((item, idx) => {
          const match = item.match(/See Figure (\\d+)/i);

          if (match) {
            const figIndex = parseInt(match[1], 10) - 1;
            return (
              <li key={idx}>
                {item.replace(match[0], "")}
                <button
                  className="text-blue-600 hover:text-blue-800 underline ml-1"
                  onClick={() => onOpen(images?.[figIndex])}
                >
                  {match[0]}
                </button>
              </li>
            );
          }

          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [openImg, setOpenImg] = useState(null);

  const projects = [
    {
      title: "Cycle Log",
      description: [
        "Visualize all your cycling activities from Strava on a full-screen interactive map. Track your rides, see your routes, and get a clear overview of your cycling history.",
        "NOTE: You will only be able to use the demo mode since this app has not yet been approved by Strava.",
      ],
      links: [
        "https://cycle-map.vercel.app/dashboard?mode=demo",
        "https://github.com/Cameron2920/cycle-map",
      ],
      features: [
        "📍 Interactive Maps – All of your rides plotted on a full-screen, zoomable map.",
        "📊 Ride Overview – See distances, durations, and dates for your activities.",
        "🔑 Strava Integration – Connect with Strava to pull in your personal ride data.",
        "🧪 Demo Mode – Try out the app without a Strava account using sample rides.",
      ],
      techStack: ["Next.js", "Tailwind"],
      images: [CycleLogScreenshot2, CycleLogScreenshot1],
      imageLayout: "vertical",
    },
    {
      title: "Cycle Map",
      description: [
        "A mobile app that helps cyclists plan and follow routes.",
      ],
      links: [
        "https://github.com/Cameron2920/Cycling-Map",
      ],
      features: [
        "🗺️ Interactive Map – Browse routes on a Mapbox-powered map.",
        "📍 Route Planning – Search for start and end locations with geocoding.",
        "🔊 Turn-by-Turn Navigation – Spoken instructions and vibration alerts for each step.",
        "📏 Distance to Next Turn – Real-time distance updates while navigating.",
        "🔋 Background Navigation – Keeps tracking your ride even when the app is in the background.",
      ],
      techStack: ["Expo", "React Native", "Mapbox"],
      images: [CycleMapRoute, CycleMapNavigation, CycleMapSearch],
      imageLayout: "horizontal",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="space-y-20">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden"
          >
            <div className="p-10 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                {project.title}
              </h3>

              <div className="md:flex md:gap-12">
                {/* Details column */}
                <div className="md:flex-1">
                  <SectionList
                    title="Description"
                    items={project.description}
                    images={project.images}
                    onOpen={setOpenImg}
                  />
                  <SectionList
                    title="Links"
                    items={project.links}
                    images={project.images}
                    onOpen={setOpenImg}
                  />
                  <SectionList
                    title="Features"
                    items={project.features}
                    images={project.images}
                    onOpen={setOpenImg}
                  />
                  <SectionList
                    title="Tech Stack"
                    items={project.techStack}
                    images={project.images}
                    onOpen={setOpenImg}
                  />
                </div>

                {/* Images */}
                {project.images?.length > 0 && project.imageLayout === "vertical" && (
                  <div className="mt-8 md:mt-0 md:flex-1">
                    <ProjectImages images={project.images} onOpen={setOpenImg} isHorizontal={false} />
                  </div>
                )}
              </div>

              {/* For horizontal layout, render images below details */}
              {project.images?.length > 0 && project.imageLayout === "horizontal" && (
                <div className="mt-8">
                  <ProjectImages images={project.images} onOpen={setOpenImg} isHorizontal={true} />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Global image modal */}
      <ImageModal openImg={openImg} onClose={() => setOpenImg(null)} />
    </div>
  );
}

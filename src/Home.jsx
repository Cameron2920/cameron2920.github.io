export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
          Cameron Ramsay
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 animate-fade-in delay-200">
          Senior Software Engineer · Fullstack · Mobile
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/Cameron2920"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:scale-105 transform transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/cameron-ramsay-a331a136a/"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:scale-105 transform transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:caramsay2920@gmail.com"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:scale-105 transform transition"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

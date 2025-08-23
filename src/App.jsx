export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            Cameron Ramsay
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6 animate-fade-in delay-200">
            Senior Software Engineer · Fullstack · Mobile
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href="https://github.com/Cameron2920"
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transform transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cameron-ramsay-a331a136a/"
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transform transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:caramsay2920@gmail.com"
              className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:scale-105 transform transition"
            >
              Email
            </a>
          </div>
        </div>
      </header>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Ruby on Rails",
            "PostgreSQL",
            "React / React Native",
            "AWS / Docker",
            "Mobile (iOS & Android)",
            "Angular",
            "Payments",
            "IoT",
            "Healthcare",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-xl shadow-lg p-4 text-center font-medium text-gray-700 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Cameron Ramsay
        </div>
      </footer>
    </div>
  );
}

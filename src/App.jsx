import { HashRouter as Router } from "react-router-dom";
import Home from "./Home";
import CaseStudies from "./CaseStudies";
import About from "./About.jsx";
import { Bike } from "lucide-react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900">
        {/* Navbar */}
        <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg">
          <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Bike className="w-6 h-6 text-yellow-300 animate-pulse" />
              Cameron Ramsay
            </h1>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
          <About />
          <div className="border-t-4 border-dashed border-yellow-400"></div>
          <CaseStudies />
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-12">
          <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
            <Bike className="w-4 h-4 text-blue-600" />
            © {new Date().getFullYear()} Cameron Ramsay
          </div>
        </footer>
      </div>
    </Router>
  );
}

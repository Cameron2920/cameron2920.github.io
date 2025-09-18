import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import CaseStudies from "./CaseStudies";
import About from "./About";
import { Bike } from "lucide-react";
import Projects from "./Projects.jsx";
import BananaBike from "./assets/banana-bike.png";

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <img className="h-10 w-auto" src={BananaBike} />
          Cameron Ramsay
        </Link>
        <nav className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/case-studies" className="hover:text-yellow-300 transition">Case Studies</Link>
          <Link to="/projects" className="hover:text-yellow-300 transition">Projects</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
        <Bike className="w-4 h-4 text-blue-600" />
        © {new Date().getFullYear()} Cameron Ramsay
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-blue-50 text-gray-900">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

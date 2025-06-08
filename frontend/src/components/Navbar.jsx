import { FileText, Info } from "lucide-react";

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="w-full py-4 px-6 bg-white/10 backdrop-blur-md shadow-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">🧩 Conversor de Arquivos</h1>
        <div className="space-x-4 text-sm font-medium">
          <button
            onClick={() => setActiveTab("converter")}
            className={`inline-flex items-center gap-1 hover:underline ${
              activeTab === "converter" ? "underline text-blue-400" : ""
            }`}
          >
            <FileText size={16} /> Conversor
          </button>
          <button
            onClick={() => setActiveTab("sobre")}
            className={`inline-flex items-center gap-1 hover:underline ${
              activeTab === "sobre" ? "underline text-blue-400" : ""
            }`}
          >
            <Info size={16} /> Sobre
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

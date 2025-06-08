import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ConversionForm from "./components/ConversionForm";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("converter");

  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 pt-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white px-4">
        <AnimatePresence mode="wait">
          {activeTab === "converter" && (
            <motion.section
              key="converter"
              className="flex items-center justify-center py-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full max-w-lg">
                <ConversionForm />
              </div>
            </motion.section>
          )}

          {activeTab === "sobre" && (
            <motion.section
              key="sobre"
              className="py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <AboutSection />
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}


export default App;

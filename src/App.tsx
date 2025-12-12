import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureAnalysis } from "./components/FeatureAnalysis";
import { FeatureCharacter } from "./components/FeatureCharacter";
import { FeatureProduction } from "./components/FeatureProduction";
import { FeatureAssets } from "./components/FeatureAssets";
import { SystemResource } from "./components/SystemResource";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <main className="w-full relative">
        <Hero />
        <FeatureAnalysis />
        <FeatureCharacter />
        <FeatureProduction />
        <FeatureAssets />
        {/* Keeping SystemResource as it might be a separate requested section not yet detailed in the new copy */}
        <SystemResource />
        <Footer />
      </main>
    </div>
  );
};

export default App;
import React, { useState } from "react";
import Hero from "../components/Hero.jsx";
import AboutSnippet from "../components/AboutSnippet.jsx";
import FeaturesPreview from "../components/FeaturesPreview.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx"; // page also includes footer but App provides final footer

// We'll reuse Modal for small inline previews on Home if needed (not required)
export default function Home(){
  return (
    <div>
      <Hero />
      <AboutSnippet />
      <FeaturesPreview />
      <ContactSection />
    </div>
  );
}

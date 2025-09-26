import React from "react";
import { GiSiren } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { FaRoute } from "react-icons/fa";
import FeatureCard from "./FeatureCard.jsx";
import { Link } from "react-router-dom";

export default function FeaturesPreview(){
  const features = [
    { id:"sos", title:"SOS Alert", short:"One-tap or voice-triggered SOS", icon:<GiSiren/>},
    { id:"fakecall", title:"Fake Call", short:"Discreet fake call to escape", icon:<FiPhone/>},
    { id:"saferoute", title:"Safe Route", short:"Safer paths using crowd data", icon:<FaRoute/>}
  ];

  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Features</h2>
        <p className="mt-3 text-slate-600 text-center">Tap any feature to preview — click Explore More to view all features and their detailed workflows.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map(f=>(
            <FeatureCard key={f.id} title={f.title} short={f.short} icon={f.icon} onClick={()=>{ /* quick preview could open modal; for preview we navigate */ window.location.href = "/features#" + f.id}} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/features" className="px-6 py-3 bg-gnblue text-white rounded-full">Explore More</Link>
        </div>
      </div>
    </section>
  );
}

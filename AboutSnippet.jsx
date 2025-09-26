import React from "react";
import { Link } from "react-router-dom";

export default function AboutSnippet(){
  return (
    <section id="what" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900">What is Guardian Network?</h2>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Guardian Network is a community-driven safety platform combining quick alerts, verified volunteers, and law enforcement escalation to reduce response time in emergencies.
        </p>
        <div className="mt-6">
          <Link to="/about" className="px-5 py-2 bg-gnblue text-white rounded-md">Read more</Link>
        </div>
      </div>
    </section>
  );
}

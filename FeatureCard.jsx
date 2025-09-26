import React from "react";

export default function FeatureCard({ title, short, onClick, icon }) {
  return (
    <article onClick={onClick} className="bg-white rounded-2xl p-6 card-shadow cursor-pointer hover:-translate-y-2 transition transform">
      <div className="flex gap-4 items-start">
        <div className="text-3xl">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="mt-1 text-sm text-slate-600">{short}</p>
        </div>
      </div>
    </article>
  );
}

import React from "react";

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-3">
          <span className="text-white font-semibold">Guardian Network</span> — Community safety & rapid response
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Guardian Network. All rights reserved.</p>
      </div>
    </footer>
  );
}

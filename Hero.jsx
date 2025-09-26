// src/components/HeroSection.jsx
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Guardian Network</h1>
      <p className="text-lg md:text-xl max-w-2xl">
        AI-powered community safety: instant SOS alerts, volunteer response, and police escalation — all in one app.
      </p>
      <p className="mt-6 italic text-sm opacity-80">"Together we rise, together we protect."</p>
    </section>
    
  );
}

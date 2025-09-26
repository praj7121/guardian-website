import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">About Guardian Network</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Empowering safety through community, technology, and rapid response. Our mission is 
          to create a safer society where help is always just one tap away.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-600 text-center">
          Guardian Network’s mission is to leverage technology to reduce response time 
          in emergencies, protect individuals from harassment, and create a strong 
          community-driven safety platform.
        </p>
      </section>

      {/* Problem */}
      <section className="py-16 bg-white max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">The Problem</h2>
        <p className="text-lg text-gray-600 text-center">
          Every day, countless people face threats such as harassment, accidents, and emergencies 
          with delayed assistance. Traditional safety apps often lack verified volunteers, 
          police integration, or real-time collaboration — leaving people vulnerable.
        </p>
      </section>

      {/* Solution */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Solution</h2>
        <p className="text-lg text-gray-600 text-center">
          Guardian Network bridges the gap by combining AI-powered emergency triggers, 
          instant SOS alerts, verified volunteer responders, and direct law enforcement 
          escalation — all in one trusted platform.
        </p>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-white max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Future Vision</h2>
        <p className="text-lg text-gray-600 text-center">
          Our vision is to build a global safety ecosystem where every individual feels secure 
          regardless of where they are. With AI, community support, and strong institutional 
          collaboration, Guardian Network aims to be the most reliable safety companion worldwide.
        </p>
      </section>

      {/* Impact */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Impact</h2>
        <p className="text-lg text-gray-600 text-center">
          By empowering individuals and communities, Guardian Network reduces emergency 
          response times, prevents potential crimes, and builds a culture of vigilance, 
          compassion, and safety.
        </p>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet the Founders</h2>
          <p className="text-lg text-gray-600 mb-12">
            Behind Guardian Network are passionate individuals committed to building 
            a safer world through technology and collaboration.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Founder 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <img
                src="/images/founder1.jpeg"
                alt="Founder 1"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-600 mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Prajwal Patil</h3>
              <p className="text-indigo-600 font-medium">Founder & Visionary</p>
              <p className="mt-4 text-gray-600">
                Prajwal is the driving force behind Guardian Network, combining his 
                passion for innovation and compassion for society to create a platform 
                that ensures safety and rapid response during emergencies.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
              <img
                src="/images/founder2.jpeg"
                alt="Founder 2"
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-indigo-600 mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">Alekhya Singupurapu</h3>
              <p className="text-indigo-600 font-medium">Founder & Strategist</p>
              <p className="mt-4 text-gray-600">
                Alekhya brings strategic vision and dedication to Guardian Network, 
                focusing on user needs, collaboration with stakeholders, and ensuring 
                the platform grows to make a real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

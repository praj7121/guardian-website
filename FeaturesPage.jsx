// src/pages/FeaturesPage.jsx
import React, { useState } from "react";
import WorkflowModal from "../components/WorkflowModal";

const FeaturesPage = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      title: "AI Voice Trigger",
      description:
        "Trigger emergency alerts with a custom voice code. Helps in hands-free distress activation.",
      frontend:
        "Detects audio input, continuously listens for user-defined keyword using Web Speech API / ML models.",
      backend:
        "Processes trigger, verifies keyword, then pushes alert to volunteers & police in real time.",
    },
    {
      title: "Volunteer Verification",
      description:
        "Every volunteer undergoes strict verification including ID proof & address verification.",
      frontend:
        "Registration form with step-by-step validation & status tracking.",
      backend:
        "Stores volunteer details securely, runs verification workflows, and marks status.",
    },
    {
      title: "Live Location Sharing",
      description:
        "User can share live location with volunteers and zonal heads during distress situations.",
      frontend:
        "Integrates Google Maps API to track and show live user position.",
      backend:
        "Stores coordinates securely and streams updates to authorized volunteers/executives.",
    },
    {
      title: "Fake Call System",
      description:
        "Helps user escape unsafe situations with real volunteer call or pre-recorded fake conversation.",
      frontend:
        "Interactive UI for choosing between fake call or volunteer call.",
      backend:
        "Triggers either pre-recorded audio playback or real call initiation with volunteer.",
    },
    {
      title: "Safe Route Navigation",
      description:
        "Guides users through safest available path by analyzing real-time crowd & crime data.",
      frontend:
        "Map interface with highlighted safe routes, turn-by-turn navigation.",
      backend:
        "Processes crowd-sourced safety data + police database to suggest safe path.",
    },
    {
      title: "Track Me",
      description:
        "User shares location with trusted contacts/zonal head who gets periodic updates.",
      frontend:
        "Button to activate tracking, shows progress bar/timer until safely reached.",
      backend:
        "Schedules periodic pings and auto-stops on safe arrival confirmation.",
    },
    {
      title: "Emergency Battery Alert",
      description:
        "If user’s battery is critically low, alert is automatically triggered before shutdown.",
      frontend:
        "Checks device battery API and warns user with popup before sending alert.",
      backend:
        "Triggers pre-alert to volunteers/police including last known location.",
    },
    {
      title: "Tutorial & Rewards",
      description:
        "Self-defense and awareness tutorials with reward-based gamification.",
      frontend:
        "Video player with progress tracking, reward stars shown on profile.",
      backend:
        "Stores learning progress, issues reward points, maintains leaderboard.",
    },
  ];

  return (
    <div className="px-6 py-12">
      {/* Features List */}
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        Guardian Network Features
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-lg text-center text-gray-700 font-medium"
          >
            {feature.title}
          </div>
        ))}
      </div>

      {/* Detailed Features Section */}
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Detailed Feature Explanations
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <button
              onClick={() => setSelectedFeature(feature)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Learn Workflow
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <WorkflowModal
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
        feature={selectedFeature}
      />
    </div>
  );
};

export default FeaturesPage;

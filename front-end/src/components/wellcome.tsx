import React from "react";

const WellCome: React.FC = () => {
  const userName = "Kuma"; // Replace with dynamic user data fetched from context or state
  const userRegion = "Jimma"; // Replace with dynamic user location data
  const currentHour = new Date().getHours();

  // Determine the dynamic greeting message based on the time of day
  const getGreetingMessage = () => {
    if (currentHour < 12) {
      return `Here’s your morning update for ${userRegion}.`;
    } else if (currentHour < 18) {
      return `Good afternoon, catch up on today’s advice for ${userRegion}.`;
    } else {
      return `Good evening, catch up on today’s forecasts for ${userRegion}.`;
    }
  };

  return (
    <>
      <section className="bg-green-100 py-8">
        <div className="container mx-auto px-6">
          {/* Welcome Message */}
          <h1 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
            Welcome back, {userName}!
          </h1>
          <p className="text-lg text-green-700">{getGreetingMessage()}</p>
        </div>
      </section>
    </>
  );
};

export default WellCome;

import React from "react";
import WeatherUpdates from "./weatherUpdates";
import CropHealth from "./cropHealth";
import AdvisoryServices from "./advisoryServices";
import MarketPrices from "./marketPrices";
import Notifications from "./notifications";
import FarmingCalendar from "./farmingCalendar";

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Content area with padding */}
      <main className="flex-1 p-6 ml-64 mt-16 space-y-8 w-full">
        <section id="weather">
          <WeatherUpdates />
        </section>
        <section id="crop-health">
          <CropHealth />
        </section>
        <section id="advisory-services">
          <AdvisoryServices />
        </section>
        <section id="market-prices">
          <MarketPrices />
        </section>
        <section id="notifications">
          <Notifications />
        </section>
        <section id="farming-calendar">
          <FarmingCalendar />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

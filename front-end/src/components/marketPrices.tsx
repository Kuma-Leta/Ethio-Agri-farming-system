import React, { useState, useEffect } from "react";
import axios from "axios";
import xml2js from "xml2js";

const MarketPrices: React.FC = () => {
  const [prices, setPrices] = useState({ maize: "", wheat: "" });

  useEffect(() => {
    async function fetchMarketPrices() {
      try {
        const response = await axios.get(
          "https://api.worldbank.org/v2/countries/ET/indicators/AG.PRD.FOOD.XD?date=2023&format=xml"
        );
        xml2js
          .parseStringPromise(response.data)
          .then((result) => {
            const maizePrice =
              result.value.find((d) => d.indicator === "Maize")?.value || "N/A";
            const wheatPrice =
              result.value.find((d) => d.indicator === "Wheat")?.value || "N/A";
            setPrices({ maize: maizePrice, wheat: wheatPrice });
          })
          .catch((err) => console.error("Error parsing XML:", err));
      } catch (error) {
        console.error("Error fetching market prices:", error);
      }
    }

    fetchMarketPrices();
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-lg font-semibold mb-2">Market Prices</h2>
      <p>Maize: {prices.maize} Birr/quintal</p>
      <p>Wheat: {prices.wheat} Birr/quintal</p>
    </div>
  );
};

export default MarketPrices;

import React from "react";

const bots = [
  { id: 1, name: "VIX 10 Bot", type: "Free" },
  { id: 2, name: "VIX 25 Bot", type: "Free" },
  { id: 3, name: "VIX 50 Bot", type: "Premium" },
  { id: 4, name: "VIX 75 Bot", type: "Premium" },
  { id: 5, name: "VIX 100 Bot", type: "Free" },
  { id: 6, name: "VIX 10s Bot", type: "Premium" },
  { id: 7, name: "VIX 100s Bot", type: "Premium" },
];

const Bots = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Available Bots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bots.map((bot) => (
          <div key={bot.id} className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{bot.name}</h2>
            <p className="text-gray-400">Type: {bot.type}</p>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-xl">
              {bot.type === "Free" ? "Launch Bot" : "Get Access"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bots;
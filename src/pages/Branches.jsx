import React from "react";

const branches = ["طرابلس", "اجدابيا", "مصراتة", "سبها"];

function Branches() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12 glow-text">
        فروعنا
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {branches.map((b) => (
          <div 
            className="bg-gray-800 p-8 rounded-2xl text-center border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 glow-box cursor-default" 
            key={b}
          >
            <h3 className="text-2xl font-bold text-gray-100">{b}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Branches;

'use client';

const StylishBorderBox = () => {
  return (
    <div className="relative bg-black text-white p-6 md:p-10 rounded-xl overflow-hidden shadow-xl group max-w-xl mx-auto">
      {/* Gradient Border Effect */}
      <div className="absolute inset-0.5 rounded-xl bg-gradient-to-r from-red-600 via-white to-red-600 blur-sm opacity-40 group-hover:opacity-60 transition duration-500 z-0"></div>

      {/* Inner Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">WorldAutoTrace</h2>
        <p className="text-gray-300 text-center">
          Get trusted & professional car inspection with a sleek experience. Fast. Reliable. Accurate.
        </p>
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition duration-300 shadow-lg">
            Book Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default StylishBorderBox;

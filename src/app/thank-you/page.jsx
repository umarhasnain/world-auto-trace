import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-lg md:text-xl text-white">
          Your checkout was successful. We appreciate your purchase!
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;

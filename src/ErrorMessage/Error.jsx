import React from 'react';

const Error = () => {

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      
      <div className="text-center max-w-lg">
        
        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={goHome}
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition-all duration-300 rounded-xl font-medium shadow-lg hover:scale-105"
        >
          Go Home
        </button>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          Error code: 404 • Lost somewhere 😵‍💫
        </p>

      </div>

    </div>
  );
};

export default Error;
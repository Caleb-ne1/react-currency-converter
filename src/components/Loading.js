import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="flex flex-col items-center">
        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full"></div>
        <h1 className="mt-4 text-white text-2xl font-semibold">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;

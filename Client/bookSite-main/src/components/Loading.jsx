// LoadingIndicator.jsx

import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-r-2 border-black border-black-500 "></div>
      <span className="ml-3 text-black dark:text-gray-300"></span>
    </div>
  );
};

export default LoadingIndicator;

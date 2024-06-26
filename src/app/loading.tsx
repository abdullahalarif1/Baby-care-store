import React from "react";


const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-800"></div>
    </div>
  );
};

export default Loading;

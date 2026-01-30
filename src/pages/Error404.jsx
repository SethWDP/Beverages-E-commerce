import React from "react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex items-center justify-center mb-8">
        <span className="text-[15rem] font-bold text-black">4</span>
        <span className="text-[15rem] font-bold text-blue-500">0</span>
        <span className="text-[15rem] font-bold text-black">4</span>
      </div>
      <h1 className="text-3xl font-medium text-gray-700 mb-8">
        Opps! Page not Found
      </h1>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Error404;

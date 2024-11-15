import React from "react";
import { HomeIcon, ArrowLeft } from "lucide-react";
import errorPage from "../assets/404.jpg";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-6 animate-fadeIn">
        <div className="relative">
          <img
            src={errorPage}
            alt="Lost in space"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
            <h1 className="text-8xl font-bold text-white">404</h1>
          </div>
        </div>

        <div className="space-y-4 px-4">
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Oops! It seems like you've ventured into uncharted territory. The
            page you're looking for has gone exploring.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg border-2 border-gray-800 hover:bg-gray-50 transition-colors duration-300"
          >
            <HomeIcon size={20} />
            Home Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

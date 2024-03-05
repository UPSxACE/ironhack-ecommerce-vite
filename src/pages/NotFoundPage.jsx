import React from "react";
import { PiSmileySad } from "react-icons/pi";

function NotFoundPage() {
  return (
    <div className="flex flex-col text-gray-600 h-screen items-center justify-center gap-10">
      <div>
        <PiSmileySad className="text-9xl"/>
      </div>
      <h1 className="text-6xl">404</h1>
      <h2 className="text-4xl">Page not found</h2>
    </div>
  );
}

export default NotFoundPage;

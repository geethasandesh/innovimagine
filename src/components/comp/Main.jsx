import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = (e) => {
    console.error("Spline scene failed to load:", e);
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      <Suspense fallback={null}>
        <Spline 
          scene="https://prod.spline.design/KGpMmPb49O9CWIeu/scene.splinecode" 
          onLoad={onLoad}
          onError={onError}
        />
      </Suspense>

      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Failed to load 3D scene. Please refresh the page.
          </div>
</div>
      )}

      <div className="absolute bottom-4 right-4 bg-black rounded-lg px-6 py-2 shadow-lg z-10">
        <p className="text-sm text-white font-medium">Innovimagine</p>
      </div>
  </div>
  );
};

export default Main;





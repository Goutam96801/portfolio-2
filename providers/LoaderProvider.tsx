'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import InitialLoader from '@/components/InitialLoader';
import { useClickSound } from '@/hooks/useClickSound';

interface LoaderContextType {
  showLoader: boolean;
}

const LoaderContext = createContext<LoaderContextType>({ showLoader: false });

export function LoaderProvider({ children, name }: { children: React.ReactNode; name: string }) {
  const [showLoader, setShowLoader] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('portfolio_visited');
    
    if (!hasVisited) {
      setShowLoader(true);
      localStorage.setItem('portfolio_visited', 'true');
    } else {
      setShowApp(true);
    }
    
    setIsLoading(false);
  }, []);


  if (isLoading) {
    return null;
  }

  return (
    <LoaderContext.Provider value={{ showLoader }}>
      {showLoader && (
        <InitialLoader
          name={name}
          onExitStart={() => setShowApp(true)}
          onComplete={() => setShowLoader(false)}
        />
      )}
      {showApp && children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  return useContext(LoaderContext);
}

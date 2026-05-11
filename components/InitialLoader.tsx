'use client';

import { useEffect, useState } from 'react';

interface InitialLoaderProps {
  name: string;
  onComplete: () => void;
}

export default function InitialLoader({ name, onComplete }: InitialLoaderProps) {
  const [displayedName, setDisplayedName] = useState('');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout: NodeJS.Timeout;

    const typeCharacter = () => {
      if (index < name.length) {
        setDisplayedName(name.slice(0, index + 1));
        index++;
        timeout = setTimeout(typeCharacter, 300);
      } else {
        timeout = setTimeout(() => {
          setIsExiting(true);
        }, 650);
      }
    };

    typeCharacter();

    return () => clearTimeout(timeout);
  }, [name]);

  useEffect(() => {
    if (!isExiting) {
      return;
    }

    const timeout = setTimeout(onComplete, 980);
    return () => clearTimeout(timeout);
  }, [isExiting, onComplete]);

  return (
    <div
      id="initial-loader"
      className={`notranslate${isExiting ? ' initial-loader-exit' : ''}`}
      lang="en-US"
      translate="no"
      aria-hidden="true"
    >
      <div id="initial-loader-shell">
        <div id="initial-loader-stage" className="notranslate" lang="en-US" translate="no">
          {displayedName}
        </div>
      </div>
    </div>
  );
}

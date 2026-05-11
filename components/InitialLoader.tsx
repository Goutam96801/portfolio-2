'use client';

import { useEffect, useState } from 'react';

interface InitialLoaderProps {
  name: string;
  onExitStart?: () => void;
  onComplete: () => void;
}

export default function InitialLoader({ name, onExitStart, onComplete }: InitialLoaderProps) {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout: NodeJS.Timeout;

    const typeCharacter = () => {
      if (index < name.length) {
        setVisibleCharacters(index + 1);
        index++;
        timeout = setTimeout(typeCharacter, 280);
      } else {
        setIsExiting(true);
        onExitStart?.();
      }
    };

    setVisibleCharacters(0);
    setIsExiting(false);
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
          {Array.from(name).map((character, index) => (
            <span
              key={`${character}-${index}`}
              className="initial-loader-letter"
              aria-hidden={index >= visibleCharacters}
            >
              {index < visibleCharacters ? character : '\u00A0'}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

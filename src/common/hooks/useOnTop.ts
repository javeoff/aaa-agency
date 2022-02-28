import { useState } from 'react';

export const useOnTop = (): boolean => {
  const [onTop, setOnTop] = useState<boolean>(true);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setOnTop(window.pageYOffset === 0));

    return onTop;
  }

  return false;
};

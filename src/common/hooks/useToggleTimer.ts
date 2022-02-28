import { useState } from 'react';

export const useToggleTimer = (timeout: number) => {
  const [toggleTimer, setToggleTimer] = useState<boolean>(false);

  setTimeout(() => {
    setToggleTimer(!toggleTimer);
  }, timeout);

  return toggleTimer;
};

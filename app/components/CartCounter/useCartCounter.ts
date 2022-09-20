import { useState, useCallback } from 'react';

interface UseCartCounter {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCartCounter = (): UseCartCounter => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);

  return {
    count,
    increment,
    decrement,
  };
};

export default useCartCounter;

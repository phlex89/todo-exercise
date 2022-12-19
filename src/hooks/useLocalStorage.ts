import { useCallback } from 'react';

export function useLocalStorage<T>(key: string) {
  const saveItem = useCallback(
    (item: T) => {
      localStorage.setItem(key, JSON.stringify(item));
    },
    [key],
  );

  const getItem = useCallback(() => {
    const saved: string | null = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved) as T;
    }
  }, [key]);

  return { saveItem, getItem };
}

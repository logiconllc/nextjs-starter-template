// A custom hook to manage localStorage with React state reactivity with Type safety and server side support.

import { useState, useEffect, useCallback } from "react";

type SetValue<T> = (value: T | ((val: T) => T)) => void;

/**
 * useLocalStorage Hook - A hook to manage localStorage with React state reactivity
 *
 * @param key - The key to store the value in localStorage
 * @param initialValue - The initial value to use if the key doesn't exist in localStorage
 * @returns [storedValue, setValue] - The stored value and a setter function for the value
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  // State to store the current value, defaults to the initialValue if not in localStorage
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue; // If server-side, return initial value
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  /**
   * Sets a new value in state and localStorage
   *
   * @param value - New value to store, can be a function of the previous value
   */
  const setValue: SetValue<T> = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);

        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.error(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue]
  );

  /**
   * Sync state across multiple tabs using the 'storage' event
   */
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        try {
          const newValue = JSON.parse(event.newValue);
          setStoredValue(newValue);
        } catch (error) {
          console.error(
            `Error parsing localStorage value for key “${key}”:`,
            error
          );
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}

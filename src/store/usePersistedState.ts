import { useState } from "react";

/**
 * Returns a persistent stateful value, and a function to update it.
 * @param {any} key string
 * @param {Type} defaultValue
 */
const usePersistedState  = <Type>(key: string, defaultValue: Type) : [Type, (value: Type) => void]  => {
  const JSONNull = "null";
  const localValue: Type = JSON.parse(localStorage.getItem(key) || JSONNull);

  const [persistentStore, setPersistentStore] = useState<Type>(
    localValue || defaultValue
  );

  const updatePersistentValue = (value: Type) => {
      localStorage.setItem(key, JSON.stringify(value));
      return setPersistentStore(value);
  };

  return [persistentStore, updatePersistentValue];
};

export default usePersistedState;

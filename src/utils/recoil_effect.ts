import AsyncStorage from "@react-native-async-storage/async-storage";
import { AtomEffect } from "recoil";

export const AsyncStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    AsyncStorage.getItem(key).then((savedValue) => {
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }

      onSet((newValue, _, isReset) => {
        isReset
          ? AsyncStorage.removeItem(key)
          : AsyncStorage.setItem(key, JSON.stringify(newValue));
      });
    });
  };

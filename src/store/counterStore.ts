import { atom } from "recoil";
import { AsyncStorageEffect } from "utils/recoil_effect";

export const Counter = atom({
  key: "count",
  default: 0,
  effects: [AsyncStorageEffect("count_store")],
});

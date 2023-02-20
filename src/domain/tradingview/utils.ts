import { Bar } from "./types";

export function getObjectKeyFromValue(value, object) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function formatTimeInBar(bar: Bar) {
  return {
    ...bar,
    time: bar.time * 1000,
  };
}

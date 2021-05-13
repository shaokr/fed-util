import _ from "lodash";
import fp from "lodash/fp";

export const get = (key: string) => {
  try {
    if (window) {
      return window[key];
    }
  } catch (e) {
    if (global) {
      return global[key];
    }
  }
};
export const set = (key: string, val: any) => {
  try {
    if (window) {
      window[key] = val;
    }
  } catch (e) {
    if (global) {
      global[key] = val;
    }
  }
};

export default {
  get,
  set,
};

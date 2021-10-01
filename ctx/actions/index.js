import { KEY_PRESS, } from "./types";

export function addNote(keys) {
  return {
    type: KEY_PRESS,
    payload: keys,
  };
}


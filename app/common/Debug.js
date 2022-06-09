/* eslint-disable no-undef */
/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

let Debug = {
  log: (msg) => {
    if (__DEBUG__) {
      console.log(msg);
    }
  },
  error: (msg) => {
    if (__DEBUG__) {
      console.error(msg);
    }
  },
};

export default Debug;

// Creates magic proxy to avoid crashes on non-overwolf environments
globalThis.overwolf = new Proxy(
  () => {
    return;
  },
  {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return globalThis.overwolf;
    },
  }
);

/* no-non-null-assertion is disabled to allow access of this.listeners[name] */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { triggersObject } from ".";
import type { TriggerTarget } from "./types";

const triggerTarget: TriggerTarget = {
  listeners: {},
  dispatches: {},
  addEventListener(name, callback) {
    if (!(name in this.listeners)) {
      this.listeners[name] = [callback];
      this.dispatches[name] = triggersObject[name].listen((data) =>
        this.dispatchEvent(name, data)
      );
    } else {
      this.listeners[name]!.push(callback);
    }
  },
  removeEventListener(name, callback) {
    if (!(name in this.listeners)) {
      return;
    }
    this.listeners[name] = this.listeners[name]!.filter(
      (listener) => listener !== callback
    );
    if (this.listeners[name]!.length === 0) {
      this.dispatches[name]!();
    }
  },
  dispatchEvent(name, data) {
    if (!(name in this.listeners)) {
      return;
    }
    this.listeners[name]!.forEach((listener) => {
      listener.call(this, data);
    });
  },
};

export default triggerTarget;

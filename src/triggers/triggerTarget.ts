/* no-non-null-assertion is disabled to allow access of this.listeners[name] */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { triggersObject } from ".";
import type { TriggerTarget } from "./types";

const triggerTarget: TriggerTarget = {
  listeners: {},
  dispatches: {},
  addEventListener(name, callback) {
    if (!(name in this.listeners)) {
      this.listeners[name] = [];
      this.dispatches[name] = triggersObject[name].listen((data) =>
        this.dispatchEvent(name, data)
      );
    }
    this.listeners[name]!.push(callback);
  },
  removeEventListener(name, callback) {
    if (!(name in this.listeners)) {
      return;
    }
    const stack = this.listeners[name]!;
    for (let i = 0, l = stack.length; i < l; i++) {
      if (stack[i] === callback) {
        stack.splice(i, 1);
        if (stack.length === 0) {
          this.dispatches[name]!();
        }
        return;
      }
    }
  },
  dispatchEvent(name, data) {
    if (!(name in this.listeners)) {
      return;
    }
    const stack = this.listeners[name]!.slice();
    for (let i = 0, l = stack.length; i < l; i++) {
      const listener = stack[i] as (arg: typeof data) => void;
      listener.call(this, data);
    }
  },
};

export default triggerTarget;

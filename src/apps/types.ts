/* It's not possible to know what kind of triggers will be added */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Action } from "../actions/types";
import { Trigger } from "../triggers/types";

export type App = {
  name: string;
  title: string;
  imgSrc: string;
  triggers: Trigger<any>[];
  actions: Action<any>[];
};

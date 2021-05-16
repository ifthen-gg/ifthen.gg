import { Action } from "../actions/types";
import { Trigger } from "../triggers/types";

export type App = {
  title: string;
  imgSrc: string;
  triggers: Trigger[];
  actions: Action[];
};

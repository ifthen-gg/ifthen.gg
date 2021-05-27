import { triggersObject } from "./";

export type Trigger<T> = {
  name: string;
  title: string;
  description: string;
  listen: (callback: (data: T) => void) => () => void;
};

type TriggerObj = typeof triggersObject;
type TriggerCallbackObj = {
  [name in keyof TriggerObj]: Parameters<TriggerObj[name]["listen"]>[0];
};
export type TriggerName = keyof TriggerObj;
export type TriggerTarget = {
  listeners: Partial<
    Record<TriggerName, Array<TriggerCallbackObj[TriggerName]>>
  >;
  cleaners: Partial<Record<keyof TriggerObj, () => void>>;
  addEventListener<Name extends TriggerName>(
    name: Name,
    callback: TriggerCallbackObj[Name]
  ): void;
  removeEventListener<Name extends TriggerName>(
    name: Name,
    callback: TriggerCallbackObj[Name]
  ): void;
  dispatchEvent<Name extends TriggerName>(
    name: Name,
    data: Parameters<TriggerCallbackObj[Name]>[0]
  ): void;
};

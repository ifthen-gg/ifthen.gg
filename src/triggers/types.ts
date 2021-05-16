export type Trigger<T = unknown> = {
  title: string;
  description: string;
  onTrigger: (callback: (res: T) => void) => void;
  removeTrigger: () => void;
};

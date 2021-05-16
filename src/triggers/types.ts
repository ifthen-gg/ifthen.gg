export type Trigger<T> = {
  title: string;
  description: string;
  onTrigger: (callback: (res: T) => void) => void;
  removeTrigger: () => void;
};

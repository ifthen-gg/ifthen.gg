export type Trigger = {
  title: string;
  description: string;
  onTrigger: (callback: any) => void;
  removeTrigger: () => void;
};

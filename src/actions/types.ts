export type Action = {
  title: string;
  description: string;
  execute: (...args: string[]) => void;
};

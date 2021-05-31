export type Action<T> = {
  name: string;
  title: string;
  description: string;
  execute: (data: T) => void;
};

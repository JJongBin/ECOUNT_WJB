import { baseControl } from "../baseWidget";

export type Item = {
  id: string;
  content: string;
  done: boolean;
};

export type Column = { id: string; render: (data: Item) => baseControl };

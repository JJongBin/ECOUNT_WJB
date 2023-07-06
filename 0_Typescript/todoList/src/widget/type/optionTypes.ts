import { Item } from "./types";

export interface Option {
  id: string;
}

export interface ButtonOption extends Option {
  label: string;
  onClick(): void;
}

export interface divOption extends Option {
  parent: HTMLElement;
}

export interface H2Option extends Option {
  content: string;
}

export interface InputOption extends Option {
  type?: string;
  checked?: boolean;
  onChange?: Function;
}

export interface ListOption extends Option {
  datas: Item[];
  columns: { id: string; render: (data: Item) => HTMLElement }[];
}

export interface SearchOption extends Option {
  parent: HTMLElement;
}

export interface SpanOption extends Option {
  content: string;
}

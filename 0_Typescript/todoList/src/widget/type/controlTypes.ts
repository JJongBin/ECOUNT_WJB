export interface Control {
  id: string;
  elem: HTMLElement;
  dispose?: Function;
}

export interface ButtonControl extends Control {}

export interface DivControl extends Control {
  append: Function;
}

export interface H2Control extends Control {}

export interface InputControl extends Control {
  getValue: Function;
  focus: Function;
  valueReset: Function;
}

export interface ListControl extends Control {
  reload: Function;
}

export interface SearchControl extends Control {
  append: Function;
}

export interface SpanControl extends Control {}

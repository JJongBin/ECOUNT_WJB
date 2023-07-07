import Core from "./core";
import { ButtonControl } from "./button";
import { DivControl } from "./div";
import { ListControl } from "./list";
import { InputControl } from "./input";
import { SpanControl } from "./span";
import { H2Control } from "./h2";

const Widget = {
  button: ButtonControl,
  list: ListControl,
  div: DivControl,
  input: InputControl,
  span: SpanControl,
  h2: H2Control,
  getControl: Core.getControl,
};

export default Widget;

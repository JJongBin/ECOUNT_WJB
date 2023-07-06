import Core from "./core";
import { createButton } from "./button";
import { createDiv } from "./div";
import { createList } from "./list";
import { createInput } from "./input";
import { createSpan } from "./span";
import { createH2 } from "./h2";

const Widget = {
  button: createButton,
  list: createList,
  div: createDiv,
  input: createInput,
  span: createSpan,
  h2: createH2,
  getControl: new Core().getControl,
};

export default Widget;

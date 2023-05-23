import { createButton } from "./button.js";
import { createDiv } from "./div.js";
import { createList } from "./list.js";
import { createInput } from "./input.js";
import { createSpan } from "./span.js";
import { createH2 } from "./h2.js";

window.Widget = {
  button: createButton,
  list: createList,
  div: createDiv,
  input: createInput,
  span: createSpan,
  h2: createH2,
};

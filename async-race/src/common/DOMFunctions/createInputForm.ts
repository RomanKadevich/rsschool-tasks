import { createHTMLElement } from "./createElementFunc";
import { url, path } from "../AsyncFunctions/vars";

export function createInputForm(
  className: string,
  text: string,
  method: string,
): HTMLFormElement {
  const panel = <HTMLFormElement>(
    createHTMLElement("form", `controlPanel__${className} ${className}`)
  );
  panel.method = method;
  panel.action = `${url}${path}`;
  // panel.id = id;
  const input = <HTMLInputElement>(
    createHTMLElement("input", `${className}__input`)
  );
  input.name = "name";
  input.type = "text";
  const inputColor = <HTMLInputElement>(
    createHTMLElement("input", `${className}__input-color`)
  );
  inputColor.name = "color";
  inputColor.type = "color";
  inputColor.value = "#D5F0C7";
  const button = <HTMLButtonElement>(
    createHTMLElement("button", `${className}__button button`)
  );
  button.textContent = text;
  panel.append(input);
  panel.append(inputColor);
  panel.append(button);
  return panel;
}

type HtmlElement = HTMLElement | HTMLFormElement | HTMLInputElement;

export function createHTMLElement(
  tagName: string,
  className: string,
  id: string = className,
): HtmlElement {
  const element: HtmlElement = document.createElement(tagName);
  element.className = className;
  element.id = id;
  return element;
}

export function createInputForm(
  className: string,
  text: string,
  method: string,
): HTMLFormElement {
  const panel = <HTMLFormElement>(
    createHTMLElement("form", `controlPanel__${className} ${className}`)
  );
  panel.method = method;
  panel.action = "";
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
  const button = <HTMLButtonElement>(
    createHTMLElement("button", `${className}__button button`)
  );
  button.textContent = text;
  panel.append(input);
  panel.append(inputColor);
  panel.append(button);
  return panel;
}
export function createSubmitForm(
  className: string,
  text: string,
  method: string,
): HTMLFormElement {
  const submitForm = <HTMLFormElement>(
    createHTMLElement("form", `buttons__${className}`)
  );
  submitForm.method = method;
  submitForm.action = "";
  // panel.id = id;
  const input = <HTMLInputElement>(
    createHTMLElement("input", `buttons__${className}-input button`)
  );
  input.name = "name";
  input.type = "submit";
  input.value = text;
  submitForm.append(input);
  return submitForm;
}

import { createHTMLElement } from "./createElementFunc";

export function createSubmitForm(
  className: string,
  text: string,
  method: string,
  id: string = className,
): HTMLFormElement {
  const submitForm = <HTMLFormElement>createHTMLElement("form", className);
  submitForm.method = method;
  submitForm.id = id;
  // panel.id = id;
  const input = <HTMLInputElement>(
    createHTMLElement("input", `${className}-input button`)
  );
  input.name = "name";
  input.type = "submit";
  input.value = text;
  submitForm.append(input);
  return submitForm;
}

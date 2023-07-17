export type HtmlElement = HTMLElement | HTMLFormElement | HTMLInputElement;
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

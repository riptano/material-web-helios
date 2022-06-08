import { MDCTextField } from "@material/textfield";

const textFieldElements = [].slice.call(
  document.querySelectorAll(".mdc-text-field")
);
textFieldElements.forEach((textFieldEl: HTMLInputElement) => {
  new MDCTextField(textFieldEl);
});

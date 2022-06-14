import { MDCTextField } from "@material/textfield";
import { MDCTextFieldHelperText } from "@material/textfield/helper-text";

const textFields = [].map.call(
  document.querySelectorAll(".mdc-text-field"),
  (el: any) => {
    const textField = new MDCTextField(el);
    if (textField.ripple) textField.ripple.destroy();
    return textField;
  }
);

const helperTexts = [].map.call(
  document.querySelectorAll(".mdc-text-field-helper-text"),
  (el: any) => {
    const textField = new MDCTextFieldHelperText(el);
    return textField;
  }
);

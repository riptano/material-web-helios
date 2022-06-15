import { MDCTextField } from "@material/textfield";
import { MDCTextFieldHelperText } from "@material/textfield/helper-text";
import { MDCSwitch } from "@material/switch";

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
    return new MDCTextFieldHelperText(el);
  }
);

const switches = [].map.call(
  document.querySelectorAll(".mdc-switch"),
  (el: any) => {
    return new MDCSwitch(el);
  }
);

const themeSwitch = document.getElementById("theme-switch");
themeSwitch.onclick = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";
  if (currentTheme === "light") {
    targetTheme = "dark";
  }
  document.documentElement.setAttribute("data-theme", targetTheme);
};

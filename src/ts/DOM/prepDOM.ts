// keep autocomplete but disable autofill hack

[
  "form__firstName__input",
  "form__lastName__input",
  "form__email__input",
  "form__phone__input",
  "form__address__input",
  "form__city__input",
  "form__zip__input",
].forEach((elm) => {
  (<HTMLInputElement>document.getElementById(elm))!.value = "";
});

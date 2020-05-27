function emailIsValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function phoneIsValid(number: string) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
    number
  );
}

function usZipIsValid(zip: string) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

function validateCSS(fn: any, targ: any) {
  if (fn(targ.value)) {
    isValidInput(true, targ);
  } else {
    isValidInput(false, targ);
  }
}

function notEmpty(str: string) {
  return str.length > 0;
}

document
  .getElementById("form__ship__button")
  ?.addEventListener("click", (evt: Event) => {
    evt.preventDefault();
    validate();
  });

document
  .getElementById("form__email__input")
  ?.addEventListener("change", function () {
    validateCSS(emailIsValid, this);
  });

document
  .getElementById("form__phone__input")
  ?.addEventListener("change", function () {
    validateCSS(phoneIsValid, this);
  });

// we can't reliably validate these, so we will simply check if they're empty
[
  "form__firstName__input",
  "form__lastName__input",
  "form__address__input",
  "form__city__input",
].forEach(function (elm) {
  document.getElementById(elm)?.addEventListener("change", function () {
    validateCSS(notEmpty, this);
  });
});

document
  .getElementById("form__zip__input")
  ?.addEventListener("change", function () {
    const FORMSELECTCOUNTRY: HTMLSelectElement | null = <HTMLSelectElement>(
      document.getElementById("form__select__country")
    );
    if (
      FORMSELECTCOUNTRY!.options[FORMSELECTCOUNTRY!.selectedIndex].value ===
      "United States of America"
    ) {
      validateCSS(usZipIsValid, this);
    }
  });

function validate() {
  emailIsValid(
    (<HTMLInputElement>document.getElementById("form__email__input"))!.value
  )
    ? console.log("email is valid")
    : console.log("email is invalid");
  console.log(
    phoneIsValid(
      (<HTMLInputElement>document.getElementById("form__phone__input"))!.value
    )
  );

  if (
    (<HTMLSelectElement>document.getElementById("form__select__country"))!
      .options[
      (<HTMLSelectElement>document.getElementById("form__select__country"))!
        .selectedIndex
    ].value === "United States of America"
  ) {
    console.log("usa");
    console.log(
      usZipIsValid(
        (<HTMLInputElement>document.getElementById("form__zip__input"))!.value
      )
    );
  }
}

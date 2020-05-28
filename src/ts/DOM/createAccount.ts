function cleanPasswordInput() {
  for (let iterator = 1; iterator < 3; iterator += 1) {
    (<HTMLInputElement>(
      document.getElementById(`form__password__${iterator}`)
    ))!.value = "";
  }
}

function togglePasswordVisibility() {
  let passwordBlock: HTMLElement | null = document.getElementById(
    `form__password__block`
  );
  let newType: string;

  if (passwordBlock?.classList.contains("password-disguised")) {
    newType = "text";
  } else {
    newType = "password";
  }

  passwordBlock!
    .querySelectorAll("input:not(.not-password)")
    .forEach((inp: any) => {
      inp.type = newType;
    });
  passwordBlock!.classList.toggle("password-disguised");
}

document
  .getElementById("create__account__checkbox")!
  .addEventListener("change", function () {
    document
      .getElementById("form__password__block")!
      .classList.toggle("hidden");
    cleanPasswordInput();
  });

document
  .getElementById("form__password__show")
  ?.addEventListener("change", function () {
    togglePasswordVisibility();
  });

// I realize this is over-engineered, mostly as a thought exercise
for (
  let elms = ["form__password__1", "form__password__2"], iterator = 0;
  iterator < 2;
  iterator += 1
) {
  document
    .getElementById(elms[iterator])
    ?.addEventListener("change", function () {
      if (
        (<HTMLInputElement>this)!.value !==
        (<HTMLInputElement>(
          document.getElementById(
            elms.filter((elm) => elm !== elms[iterator])[0]
          )
        ))!.value
      ) {
        (<HTMLInputElement>(
          document.getElementById("form__password__match")
        ))!.classList.remove("hidden");
      } else {
        document
          .getElementById("form__password__match")!
          .classList.add("hidden");
      }
    });
}

document
  .getElementById("form__password__1")!
  .addEventListener("change", function (evt: Event) {
    if (
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(
        (<HTMLInputElement>evt.target!).value
      )
    ) {
      document
        .getElementById("form__password__requirements")
        ?.classList.add("hidden");
    } else {
      document
        .getElementById("form__password__requirements")
        ?.classList.remove("hidden");
    }
  });

// Prevents copy paste in password reentry
document
  .getElementById("form__password__2")!
  .addEventListener("paste", function (evt: Event) {
    evt.preventDefault();
  });

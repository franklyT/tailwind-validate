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

// Prevents copy paste in password reentry
document
  .getElementById("form__password__2")!
  .addEventListener("paste", function (evt: Event) {
    evt.preventDefault();
  });

function isValidInput(truthiness:boolean, elm: any) {
    if (truthiness) {
        elm!.classList.add("form__input__valid");   
        elm!.classList.remove("form__input__invalid");     
    } else {
        elm!.classList.remove("form__input__valid");   
        elm!.classList.add("form__input__invalid");     
    }
}
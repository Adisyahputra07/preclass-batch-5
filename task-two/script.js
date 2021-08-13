// Dom Input
const form = document.querySelector("#form");
let inputName = document.querySelector("#name");
let inputPhone = document.querySelector("#phone");
let inputEmail = document.querySelector("#email");
let inputAddress = document.querySelector("#address");
let inputSummary = document.querySelector("#summary");
let inputGender = document.getElementsByName("genders");

// Dom Display
let displayName = document.querySelector("#displayName");
let displaySummary = document.querySelector("#displaySummary");
let displayPhone = document.querySelector("#displayPhone");
let displayGmail = document.querySelector("#displayGmail");
let displayGender = document.querySelector("#displayGender");
let displayAddress = document.querySelector("#displayAddress");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  displayName.innerHTML = inputName.value;
  displaySummary.innerHTML = inputSummary.value;
  displayPhone.innerHTML = inputPhone.value;
  displayGmail.innerHTML = inputEmail.value;
  displayAddress.innerHTML = inputAddress.value;

  if (document.getElementById("female").checked) {
    let inFemale = document.getElementById("female").value;
    displayGender.innerHTML = inFemale;
  }
  if (document.getElementById("male").checked) {
    let inMale = document.getElementById("male").value;

    displayGender.innerHTML = inMale;
  }

  inputName.value = "";
  inputSummary.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
  inputAddress.value = "";
  document.getElementById("female").checked = "";
});

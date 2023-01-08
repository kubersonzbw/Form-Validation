const bntClear = document.querySelector(".clear");
const btnSend = document.querySelector(".send");
const inputUserName = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputRepeatPassword = document.querySelector("#password2");
const inputEmail = document.querySelector("#email");
const popup = document.querySelector(".popup");

const checkForm = (input) => {
  input.forEach((e) => {
    if (e.value === "") {
      showError(e, e.placeholder);
    } else {
      clearError(e);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.textContent.replace(
        ":",
        ""
      )} musi składać się z min.${min} znaków`
    );
  }
};

const checkMail = (email) => {
  const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
  if (re.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "E-mail jest niepoprawny");
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Hasła do siebie nie pasują.");
  }
};

const clearError = (err) => {
  err.parentNode.classList.remove("error");
};

const showError = (change, msg) => {
  change.parentNode.classList.add("error");
  change.nextElementSibling.textContent = msg;
};

const clearForm = (e) => {
  e.preventDefault();
  [inputPassword, inputRepeatPassword, inputUserName, inputEmail].forEach(
    (element) => {
      element.value = "";
      clearError(element);
    }
  );
};

const checkErros = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;
  allInputs.forEach((e) => {
    if (e.classList.contains("error")) {
      errorCount++;
    }
  });

  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm([inputUserName, inputPassword, inputRepeatPassword, inputEmail]);
  checkLength(inputUserName, 3);
  checkLength(inputPassword, 8);
  checkPassword(inputPassword, inputRepeatPassword);
  checkMail(email);
  checkErros();
});
bntClear.addEventListener("click", clearForm);

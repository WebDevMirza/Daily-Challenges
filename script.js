// Variables
const inputs = document.querySelectorAll('input[type="number"]');
const ul = document.querySelector(".confirmationNum");
const cardVerification = document.querySelector(".card-verification-bg");
const cross = document.querySelector(".cross");
const back = document.querySelector(".back");
const btnClose = document.querySelector(".btn-close");
const btnConfirm = document.querySelector(".btn-confirm");

const CODE = 5831;

// Close and open model
cross.addEventListener("click", () => {
  cardVerification.style.display = "none";
});

btnClose.addEventListener("click", () => {
  cardVerification.style.display = "none";
});

back.addEventListener("click", () => {
  cardVerification.style.display = "flex";
});

// Enter code

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const currentElement = e.target;

    if (currentElement.value.length > 1) {
      currentElement.value = currentElement.value.slice(0, 1);
    }

    if (currentElement.value.length >= 1) {
      if (index >= 3) {
        btnConfirm.focus();
        return;
      }
      const nextElement = inputs[index + 1];
      nextElement.focus();
    }
  });

  // For Backspace
  input.addEventListener("keydown", (event) => {
    const currentInput = event.target;
    if (event.keyCode === 8 && currentInput.value.length === 0) {
      const previousInput = inputs[index - 1];
      if (previousInput) {
        previousInput.focus();
      }
    }
  });

  input.addEventListener("focus", (e) => {
    e.target.placeholder = "";
  });

  input.addEventListener("blur", (e) => {
    e.target.placeholder = "—";
  });
});

// confirm button
btnConfirm.addEventListener("click", () => {
  const enteredNum = [];
  inputs.forEach((value, index) => {
    enteredNum.push(value.value);
  });
  if (enteredNum.join("") == CODE) {
    alert("Thank You! Verification has been completed.");
  } else {
    alert("Please Try Again. Code is not correct.");
  }
});

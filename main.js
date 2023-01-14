const button = document.querySelector(".button");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector(".form");

button.addEventListener("click", function (event) {
  let x = 0;
  event.preventDefault();
  if (password.value.length < 1) {
    password.classList.add("invalid");
  } else {
    x++;
  }
  if (firstName.value.length < 1) {
    firstName.classList.add("invalid");
  } else {
    x++;
  }
  if (lastName.value.length < 1) {
    lastName.classList.add("invalid");
  } else {
    x++;
  }
  if (!email.value.includes("@") || !email.value.includes(".")) {
    email.classList.add("invalid");
  } else {
    x++;
    console.log(x);
  }
  if (x === 4) {
    form.submit();
  }
});

// firstName.addEventListener("click", () => {
//   firstName.classList.remove("invalid");
// });
// lastName.addEventListener("click", () => {
//   lastName.classList.remove("invalid");
// });
// email.addEventListener("click", () => {
//   email.classList.remove("invalid");
// });
// password.addEventListener("click", () => {
//   password.classList.remove("invalid");
// });

form.childNodes.forEach((childNode) => {
  childNode.addEventListener("click", () => {
    childNode.classList.remove("invalid");
  });
});

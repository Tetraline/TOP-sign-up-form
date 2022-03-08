const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const pass1 = document.querySelector("#password");
  const pass2 = document.querySelector("#confirmPassword");
  const errorMsg = document.querySelector("#errMsg");
  e.preventDefault();
  if (pass1.value !== pass2.value) {
    pass1.classList.add("error");
    pass2.classList.add("error");
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "SUCCESS";
  }
});

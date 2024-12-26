//your JS code here. If required.
let form = document.getElementById("form");
let body = document.querySelector("body");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let rememberMe = document.querySelector("#checkbox");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let existingUser = document.createElement("button");
  let user = userName.value;
  let userPassword = password.value;

  if (!userName.value && !password.value) {
    return;
  }

  if (localStorage.getItem(user)) {
    existingUser.id = "existing";
    existingUser.innerHTML = "Login as existing user";
    body.append(existingUser);
    existingUser.addEventListener("click", () => {
      alert(`Logged in as ${user}`);
      userName.value = "";
      password.value = "";
    });
    return;
  }

  if (rememberMe.checked) {
    localStorage.setItem(user, userPassword);
  } else {
    localStorage.removeItem(user);
  }

  alert(`Logged in as ${user}`);
  userName.value = "";
  password.value = "";
  existingUser.remove();
}

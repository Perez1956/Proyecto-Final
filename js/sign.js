const formRegister = document.querySelector(".form-register");
formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name-register").value;
  const user = document.querySelector(".user-register").value;
  const password = document.querySelector(".password-register").value;
  const email = document.querySelector(".email-register").value;
  const genre = document.querySelector("genre").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistered = users.find((user) => user.eamil === email);
  if (isUserRegistered) alert("El usuario ya esta registrado");

  Users.push({ name: name, email: email, password: password });
  localStorage.setItem("user", JSON.stringify(users));
  alert("registro exitoso");
});

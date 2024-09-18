const list = document.querySelector(".list");

axios
  .get("https://localhost:7049/api/Users")
  .then((data) => {
    console.log(data);

    data.data.forEach((element) => {
      const btn = document.createElement("button");
      btn.innerText = "delete";

      btn.addEventListener("click", (e) => {
        e.preventDefault();

        axios
          .delete(`https://localhost:7049/api/Users?id=${element.id}`)
          .then(() => {
            alert(`User ${element.fullname} deleted successfully`);
          })
          .catch((err) => console.error("Error deleting user:", err));
      });

      const li = document.createElement("li");
      li.innerText = `${element.fullname} ${element.email}`;

      li.appendChild(btn);

      list.appendChild(li);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });

const form = document.querySelector("#registerForm"); // Select the form by ID
const fullnameInput = document.querySelector("#fullName"); // Fix the casing to match your HTML
const phoneNumberInput = document.querySelector("#phoneNumber")
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (confirmPasswordInput.value !== passwordInput.value) {
    alert("Passwords do not match");
    return;
  }

  axios
    .post("https://localhost:7049/api/Users", {
      fullname: fullnameInput.value,
      phoneNumber: phoneNumberInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      
    })
    .then(() => {
      alert(`User successfully registered: ${fullnameInput.value}`);

      fullnameInput.value = "";
      phoneNumberInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      confirmPasswordInput.value = "";
    })
    .catch((err) => {
      console.error("Error registering user:", err);
      alert("An error occurred while registering the user");
    });
});

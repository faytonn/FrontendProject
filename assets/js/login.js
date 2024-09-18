// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     axios.post("https://localhost:7049/api/Users", {
//         email: email,
//         password: password
//     })
//     .then(response => {
//         console.log("Login successful:", response.data);
//         alert("Login successful");
       
//     })
//     .catch(error => {
//         console.error("Login failed:", error);
//         alert("Login failed. Please check your email and password.");
//     });
// });


document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios.post(`https://localhost:7049/api/Users/Login?email=${email}&password=${password}`)
    .then(response => {
        console.log("Login successful:", response.data);
        alert("Login successful");
    })
    .catch(error => {
        console.error("Login failed:", error);
        alert("Login failed. Please check your email and password.");
    });
});


document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("registerForm")) {
    document
      .getElementById("registerForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let contact = document.getElementById("contact").value.trim();
        let address = document.getElementById("address").value.trim();

        if (!name || !email || !contact || !address) {
          alert("All fields are required!");
          return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, email, contact, address });

        localStorage.setItem("users", JSON.stringify(users));

        alert("User Registered Successfully!");
        document.getElementById("registerForm").reset();
      });
  }

  if (document.getElementById("userTableBody")) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let tableBody = document.getElementById("userTableBody");

    users.forEach((user) => {
      let row = tableBody.insertRow();
      row.insertCell(0).textContent = user.name;
      row.insertCell(1).textContent = user.email;
      row.insertCell(2).textContent = user.contact;
      row.insertCell(3).textContent = user.address;
    });
  }
});

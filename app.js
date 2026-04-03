const account = document.querySelector(".account");
const personal = document.querySelector(".personal");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

const successMsg = document.getElementById("successMsg");

function englishOnly(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z0-9@.]/g, "");
  e.target.value = e.target.value.replace(/\s+/g, "");
}

function phoneOnly(e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
  e.target.value = e.target.value.replace(/\s+/g, "");
}

function usernameOnly(e) {
  e.target.value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
  e.target.value = e.target.value.replace(/\s+/g, "");
}

["email", "password", "confirm"].forEach(function (id) {
  document.getElementById(id).addEventListener("input", englishOnly);
});

["phone"].forEach(function (id) {
  document.getElementById(id).addEventListener("input", phoneOnly);
});

["username"].forEach(function (id) {
  document.getElementById(id).addEventListener("input", usernameOnly);
});

nextBtn.onclick = function () {
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return alert("Invalid email format");
  }

  if (username.length < 4 || username.length > 10)
    return alert("Username must be between 4 and 10 characters long");

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    return alert("Password must contain capital letter and number");
  }

  if (password !== confirm) return alert("Passwords don't match");

  account.style.display = "none";
  personal.classList.add("show");
};

backBtn.onclick = function () {
  personal.classList.remove("show");
  account.style.display = "block";
};

submitBtn.onclick = function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return alert("Invalid email format");
  }

  const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordPattern.test(password)) {
    return alert("Password must contain capital letter and number");
  }

  if (!username) return alert("Username is required");
  if (password !== confirm) return alert("Passwords don't match");
  if (!phone) return alert("Phone is required");
  if (!country) return alert("Country is required");
  if (!gender) return alert("Gender is required");
  if (!terms) return alert("You must agree to the terms");

  successMsg.textContent = "Form submitted successfully!";

  personal.classList.remove("show");
  account.style.display = "block";

  setTimeout(function () {
    successMsg.textContent = "";
  }, 3000);
};

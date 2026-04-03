const account = document.querySelector(".account");
const personal = document.querySelector(".personal");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");

nextBtn.onclick = () => {
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!email) return alert("Email is required");
  if (!email.includes("@")) return alert("Email must include @");
  if (!username) return alert("Username is required");
  if (password.length < 6)
    return alert("Password must be at least 6 characters");
  if (password !== confirm) return alert("Passwords don't match");

  account.style.display = "none";
  personal.style.display = "block";
};

backBtn.onclick = () => {
  personal.style.display = "none";
  account.style.display = "block";
};

submitBtn.onclick = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const terms = document.getElementById("terms").checked;

  if (!email) return alert("Email is required");
  if (!email.includes("@")) return alert("Email must include @");
  if (!username) return alert("Username is required");
  if (password.length < 6)
    return alert("Password must be at least 6 characters");
  if (password !== confirm) return alert("Passwords don't match");
  if (!phone) return alert("Phone is required");
  if (!country) return alert("Country is required");
  if (!gender) return alert("Gender is required");
  if (!terms) return alert("You must agree to the terms");

  successMsg.textContent = "Form submitted successfully!";
  personal.style.display = "none";
  account.style.display = "block";
};

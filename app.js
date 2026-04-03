const account = document.querySelector(".account");
const personal = document.querySelector(".personal");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");
const successMsg = document.getElementById("successMsg");


nextBtn.onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!email.includes("@")) return alert("Email must include @");
  if (password.length < 6) return alert("Password at least 6 chars");
  if (password !== confirm) return alert("Passwords don't match");

  account.style.display = "none";
  personal.style.display = "block";
};

backBtn.onclick = () => {
  personal.style.display = "none";
  account.style.display = "block";
};
submitBtn.onclick = () => {
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const country = document.getElementById("country").value;

  if (!email) return alert("Email is required");
  if (!username) return alert("Username is required");
  if (!phone) return alert("Phone is required");
  if (!country) return alert("Country is required");

  successMsg.textContent = "Form submitted successfully!";
};


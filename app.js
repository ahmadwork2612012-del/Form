const account = document.querySelector(".account");
const personal = document.querySelector(".personal");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

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

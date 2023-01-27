// console.log("js is run");
const form = document.querySelector(".form");
const btn = document.querySelector("#button");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
btn.addEventListener("click", () => {
  if (userName.value == "admin" && email.value == "admin") {
    window.location.href = "index.html";
    console.log("true");
  } else {
    alert("sorry,you have enter incorrect User Name/Email,plz try again.");
  }
  form.reset();
});

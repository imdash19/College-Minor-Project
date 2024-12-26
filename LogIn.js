let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
let clickButton = document.querySelector(".clkbtn");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    signup.style.color = "#fff";
    login.style.color = "#000000";
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
    login.style.color = "#fff";
    signup.style.color = "#000000";
});

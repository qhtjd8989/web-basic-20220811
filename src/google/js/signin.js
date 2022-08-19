const login = document.querySelector(".main-login");
const loginInput = document.querySelector(".signin-input");
const loginLable = document.querySelector(".signin-label");

loginInput.onfocus = () => {
    loginLable.classList.toggle("onfocus-label");
    login.classList.toggle("onfocus-input");
}

loginInput.onblur = () => {
    loginLable.classList.toggle("onfocus-label");
    login.classList.toggle("onfocus-input");
}

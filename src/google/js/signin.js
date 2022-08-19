const googleLogin = document.querySelector(".main-login");
const googleLoginInput = document.querySelector(".signin-input");
const googleLoginLable = document.querySelector(".signin-label");

googleLoginInput.onfocus = () => {
    googleLoginLable.classList.toggle("onfocus-label");
    googleLogin.classList.toggle("onfocus-input");
}

googleLoginInput.onblur = () => {
    googleLoginLable.classList.toggle("onfocus-label");
    googleLogin.classList.toggle("onfocus-input");
}

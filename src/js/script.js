const emailVal = document.getElementById('email-login');
const emailError = document.getElementById('email-error');

const passVal = document.getElementById('password-login');
const passError = document.getElementById('pass-error')

function validateEmail() {
    if(!emailVal.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        emailError.innerHTML = "Invalid Email!";
        return false;
    }

    emailError.innerHTML = "";
    return true;
}

function validatePassword() {
    if(!passVal.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{9,}$/)){
        passError.innerHTML = "It should contain at least 8 characters including 1 numeric,special,lowercase and uppercase character!";
        return false;
    }

    passError.innerHTML = "";
    return true;
}
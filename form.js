function validateForm() {
    let name = document.querySelector('.contact__input--name').value;
    let email = document.querySelector('.contact__input--email').value;
    let message = document.querySelector('.contact__textarea').value;

    if (name == "" || email == "" || message == "") {
        return false;
    } else {
        window.location.href = "thanks.html";
        return false;
    }
}
validateForm();
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const nameFeedback = document.getElementById("nameFeedback");
    const passwordInput = document.getElementById("password");
    const passwordFeedback = document.getElementById("passwordFeedback");

    function updateFieldState(input, feedbackElement, isValid, successMessage, errorMessage) {
        const feedbackClass = isValid ? "form__feedback--valid" : "form__feedback--error";
        const inputClass = isValid ? "form__input--success" : "form__input--error";
        const oppositeFeedbackClass = isValid ? "form__feedback--error" : "form__feedback--valid";
        const oppositeInputClass = isValid ? "form__input--error" : "form__input--success";
        
        feedbackElement.textContent = isValid ? successMessage : errorMessage;
        feedbackElement.classList.add(feedbackClass);
        feedbackElement.classList.remove(oppositeFeedbackClass);
        
        input.classList.add(inputClass);
        input.classList.remove(oppositeInputClass);
    }

    function validateName() {
        const value = nameInput.value.trim();
        const isValidName = /^[A-Za-zА-Яа-яЁё\s]+$/.test(value) && value.split(" ").length >= 2;
        updateFieldState(nameInput, nameFeedback, isValidName, "OK", "Минимум 2 слова и только буквы");
    }

    function validatePassword() {
        const value = passwordInput.value;
        const isValidPassword = value.length >= 8 && /[0-9]/.test(value) && /[!@#$%^&*(),.?":{}|<>]/.test(value);
        updateFieldState(passwordInput, passwordFeedback, isValidPassword, "OK", "Минимум 8 символов, 1 цифру и 1 специальный символ");
    }

    nameInput.addEventListener("input", validateName);
    passwordInput.addEventListener("input", validatePassword);
});


const form = document.getElementById('form');
const fullName = document.getElementById('fullname');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');


const showError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-msg');
    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}


const showSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-msg');
    errorDisplay.innerHTML = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateFullName = () => {
    const fullNameValue = fullName.value.trim();
    const regex = /^[a-zA-ZçğıöşüÇĞİÖŞÜ]+(\s[a-zA-ZçğıöşüÇĞİÖŞÜ]+)+$/;

    if (fullNameValue === '') {
        showError(fullName, 'Full Name is required');
    } else if (!regex.test(fullNameValue)) {
        showError(fullName, 'Please enter your full name');
    } else {
        showSuccess(fullName);
    }
}


const validatePhone = () => {
    const phoneValue = phone.value.trim();

    if (phoneValue === '') {
        showError(phone, 'Phone number is required');
    } else if (phoneValue.length !== 10) {
        showError(phone, 'Please enter a 10 digit phone number');
    } else if (!/^\d+$/.test(phoneValue)) {
        showError(phone, 'Please enter a valid number');
    } else {
        showSuccess(phone);
    }
}


const validateEmail = () => {
    const emailValue = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        showError(email, 'Email is required');
    } else if (!regex.test(emailValue)) {
        showError(email, 'Please enter a valid email address');
    } else {
        showSuccess(email);
    }
}


const validatePassword = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        showError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        showError(password, 'Password must be at least 8 characters long');
    } else {
        showSuccess(password);
    }
}

const validateMessage = () => {
    const messageValue = message.value.trim();
    const minRequiredLength = 30;
    const remainingChars = minRequiredLength - messageValue.length;

    if (messageValue === '') {
        showError(message, 'Message is required');
    } else if (remainingChars > 0) {
        showError(message, `${remainingChars} more characters required`);
    } else {
        const successIcon = document.querySelector('.success-icon');
        showSuccess(message);
        successIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
}


fullName.addEventListener('change', validateFullName);
email.addEventListener('change', validateEmail);
phone.addEventListener('input', validatePhone);
password.addEventListener('change', validatePassword);
message.addEventListener('input', validateMessage);


form.addEventListener('submit', (e) => {
    e.preventDefault();
});

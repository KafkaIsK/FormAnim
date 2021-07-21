const errorMessage = document.querySelector('.error');
console.log(errorMessage.children);

function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    const progress = document.querySelector('.progress');
    const dots = progress.children;

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            if (input.type === 'text' && validateUser(input)) {
                nextSlide(parent, nextForm);
                dots[0].classList.replace('far', 'fas');
            } else if (input.type === 'email' && validateEmail(input)) {
                nextSlide(parent, nextForm);
                dots[1].classList.replace('far', 'fas');
            } else if (input.type === 'password' && validatePassword(input)) {
                nextSlide(parent, nextForm);
                dots[2].classList.replace('far', 'fas');
            } else {
                parent.style.animation = 'shake 0.5s ease';
            }

            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            })
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        //Error
        errorMessage.classList.replace('inactive', 'active')
        errorMessage.children[0].innerHTML = 'Username must be at least 6 Characters';
        error('rgb(189, 87, 87)');
    } else {
        errorMessage.classList.replace('active', 'inactive');
        error('rgb(113, 185, 5)');
        return true;
    }
}

function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        errorMessage.classList.replace('active', 'inactive');
        error('rgb(113, 185, 5)');
        return true;
    } else {
        //Error
        errorMessage.classList.replace('inactive', 'active')
        errorMessage.children[0].innerHTML = 'Not Valid Email';
        error('rgb(189, 87, 87)');
    }
}

function validatePassword(password) {
    if (password.value.length < 6) {
        //Error
        errorMessage.classList.replace('inactive', 'active')
        errorMessage.children[0].innerHTML = 'Password must be at least 6 Characters';
        error('rgb(189, 87, 87)');
    } else {
        errorMessage.classList.replace('active', 'inactive');
        error('rgb(113, 185, 5)');
        return true;
    }
}

function error(color) {
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm();
const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');

    if (navbar.classList.contains('toggle-active')) {
        navbar.classList.remove('toggle-active');
    } else {
        navbar.classList.add('toggle-active');
    }
})

function toggle() {



}
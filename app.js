// Init animation
AOS.init({
    delay: 100,
    duration: 1000
});

const body = document.getElementById('body');
const btnTheme = document.getElementById('btnTheme');

// Change theme
btnTheme.addEventListener('change', () => {
    const isDark = ( body.className === 'bg-dark' );

    body.setAttribute( 'class', isDark ? '' : 'bg-dark' );
    window.localStorage.setItem( 'theme', isDark ? 'light' : 'dark' );
});


const scrollCards = document.querySelector('.combine__container');
const buttonScrollCards = document.querySelector('.combine__btn');

// Scroll cards
buttonScrollCards.addEventListener('click', (event) => {
    event.preventDefault();

    if (scrollCards.scrollLeft == (scrollCards.scrollWidth - scrollCards.clientWidth)) {
        scrollCards.scrollLeft = 0;
    } else {
        scrollCards.scrollLeft += 300;
    }
});


const btnToggle = document.querySelector('#navToggle');
const overlay = document.querySelector('#overlay');
const navMenu = document.querySelector('#navMenu');

// Navbar responsive
btnToggle.addEventListener('click', () => {
    overlay.classList.add('overlay');
    navMenu.classList.add('nav__menu--lateral');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay');
    navMenu.classList.remove('nav__menu--lateral');
});


// Load theme
window.addEventListener('load', () => {
    // Get theme
    const theme = window.localStorage.getItem('theme');
    const isDark = ( theme === 'dark' );
    body.setAttribute( 'class', isDark ? 'bg-dark' : '' );
    btnTheme.checked = isDark ? true : false;
});
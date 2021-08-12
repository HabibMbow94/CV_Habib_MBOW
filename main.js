const btnMenu = document.getElementById('logo-menu');
 const navMenu = document.getElementById('nav-menu');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
}) 

const allLinks = document.querySelectorAll('.nav__item');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.toggle('active')
    })
}) 


// DARK LIGHT DARKTHEME
/*
const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    const body = document.body;

    if(body.classList.contains('dark')) {
        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = 'Dark'

    } else if(body.classList.contains('light')) {
        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = 'Nuit'
    }
})*/
/* 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun';

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    document.body.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})*/

/* Functionality for Dark Mode */
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Game Developer', 'Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: '2000',
    delay: 200
});
ScrollReveal().reveal('.intro1,.services1,.textservis', {
    origin: 'top',

});
ScrollReveal().reveal('.about1,.advantage1', {
    origin: 'left',
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('.advantage2', {
    origin: 'right'
});

ScrollReveal().reveal('.textbawah', {
    origin: 'bottom',
    easing: 'ease-out'
});

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let skill1 = document.getElementById('skill1');
window.addEventListener('scroll',() => {
    let value = window.scrollY;
    text1.style.left = value * -1.5 + 'px';
    text2.style.left = value * 1.5 + 'px';
    text3.style.left = value * -1.5 + 'px';
    skill1.style.left = value * 1.5 + 'px';
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('#navlist');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.page-text',{delay:200, origin:'top'});
sr.reveal('.page-img',{delay:200, origin:'top'});
window.onscroll = function() {fixarHeader()};

var header = document.querySelector('header');
var sticky = header.offsetTop; // Posição inicial do header na tela

function fixarHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}







document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("men");
    const menuIcon = document.getElementById("menu-icon");
    const closeMenu = document.getElementById("close-men");

    menuIcon.addEventListener("click", () => {
        menu.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});




















const menu = document.querySelector('.menu');
const menuIcon = document.getElementById('menu-icon');
const closeMenu = document.getElementById('close-men');
const menuLinks = document.querySelectorAll('.menu a');

// Abre o menu
menuIcon.addEventListener('click', () => {
  menu.classList.add('show');
});

// Fecha o menu com o botão X
closeMenu.addEventListener('click', () => {
  menu.classList.remove('show');
});

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});
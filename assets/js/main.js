const navbarBtn = document.getElementById('navbarBtn')
const navbarNav = document.querySelector('.main-menu')
const fn = function(e){
    navbarNav.classList.toggle('main-menu--show')
}
navbarBtn.addEventListener('click', fn)

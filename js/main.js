let openMenu = document.getElementById('menu-open')
let closeMenu = document.getElementById('menu-close')
let menuLink = document.getElementById('menu');
let ctaContact = document.getElementById('cta-contact');

const navResponsive = (navigation, close , open) => {
        menuLink.style.display = navigation;
        ctaContact.style.display = navigation;
        closeMenu.style.display = close;
        openMenu.style.display = open;
}

openMenu.addEventListener('click', () => navResponsive("flex", "block", "none"));
closeMenu.addEventListener('click', () => navResponsive("none", "none", "flex"));

let buttonShow = document.getElementById('button-detail');
let buttonHide = document.getElementById('button-hide');
let showDetailElement = document.getElementById('show-detail');

const showDetail = (show, hide, showdetail) =>{
        buttonShow.style.display = show;
        buttonHide.style.display = hide;
        showDetailElement.style.display = showdetail;
}

buttonShow.addEventListener('click', () => showDetail("none", "block", "block"));
buttonHide.addEventListener('click', () => showDetail("block", "none", "none"));

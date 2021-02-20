// Bloco para Abrir o Menu
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-navegation');

let isOpen = false;

function menuToggle() {
    menuNav.classList.toggle('active');
    openOverlay('menu');
    if(!isOpen) {
        isOpen = true;
        menu.src = "../images/icon-close-menu.svg";
        body.style.overflowY = 'hidden';
    } else {
        isOpen = false;
        menu.src = "../images/icon-hamburger.svg";
        body.style.overflowY = 'auto';
    }
}

// Bloco para Abrir Overlay
const overlay = document.querySelector('.overlay');

function openOverlay(event) {
    if(event === 'menu'){
        overlay.classList.toggle('active');
    } else {
        overlay.classList.toggle('activeModal');
    }
}

// Bloco para Abrir Modal
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.modal > img');
let openModal = document.querySelector('.back-btn')

closeModal.addEventListener('click', () => {
    openOverlay();
    removeAllClass();
    modal.classList.remove('active');
})

openModal.addEventListener('click', () => {
    openOverlay('modal');
    modal.classList.add('active');
    body.scrollIntoView({
        behavior: 'smooth'
    });
})

// Bloco para Seleção de Plano

let modalNot = document.querySelector('.modal-not');
let radioNot = document.querySelector('.radio-not-selected');
let modalPlan = document.querySelectorAll('.modal-plan');
let pricePlan = document.querySelectorAll('.title-contain h5 p');
let radio = document.querySelectorAll('.radio-selected');
let priceSelected = document.querySelectorAll('.selected-plan');
let btnContinue = document.querySelector('.continue');
let modalSuccess = document.querySelector('.modal-success');
let btnSuccess = document.querySelector('.btn-success');



function removeAllClass() {
    for(let i = 0; i < modalPlan.length; i++) {
        modalPlan[i].classList.remove('selected');
        radio[i].classList.remove('selected');
        pricePlan[i].classList.remove('selected');
        priceSelected[i].classList.remove('selected');
    }
    modalNot.classList.remove('selected');
    radioNot.classList.remove('selected');
}

function addClassSelect(number) {
    modalPlan[number].classList.add('selected');
    pricePlan[number].classList.add('selected');
        radio[number].classList.add('selected');
        priceSelected[number].classList.add('selected');
}

modalPlan.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeAllClass();
        addClassSelect(index);
    });
})

modalNot.addEventListener('click', () => {
    removeAllClass();
    modalNot.classList.add('selected');
    radioNot.classList.add('selected');
});

btnContinue.addEventListener('click', () => {
    modalSuccess.classList.add('selected');
    modal.classList.remove('active')
    body.scrollIntoView({
        behavior: 'smooth'
    });
})

btnSuccess.addEventListener('click', () => {
    removeAllClass();
    openOverlay();
    modalSuccess.classList.remove('selected');
    
})

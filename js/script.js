// modal window, popup box
let model_btns = document.querySelectorAll('[data-modal]')
let model_btns_close = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')

function toggle_modal(arr, action) {
    arr.forEach(btn => {
        btn.onclick = () => {
            modal.classList[action]('show', 'fade')
        }
    })
}

toggle_modal(model_btns, "add")
toggle_modal(model_btns_close, "remove")

// modal_btns.forEach(btn => {
//     btn.onclick = () => {
//         modal.classList.add('show', 'fade')
//     }
// })

// modal_btns_close.forEach(btn => {
//     btn.onclick = () => {
//         modal.classList.remove('show')
//     }
// })


// tabcontents

let tabs = document.querySelectorAll('.tabcontent')
let tabs_btn = document.querySelectorAll('.tabheader__item') // Array.from - переводить ваш NoteList в любой другой массив в настоящий массив - оргиналный.

function changeContent(n) {
    tabs.forEach(el => el.classList.add('hide', 'fade'))
    tabs[n].classList.remove('hide')
}

let prev = 0

tabs_btn.forEach((btn, idx) => { // forEach - у forEach есть три массив это btn, idx, arr.
    btn.onclick = () => {

        tabs_btn[prev].classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
        changeContent(idx)
        prev = idx
    }
})

changeContent(0)


// Homework carousel 
let currentSlide = 1;
let totalSlides = document.querySelectorAll('.offer__slide').length;

let prevButton = document.querySelector('.offer__slider-prev');
let nextButton = document.querySelector('.offer__slider-next');
let currentCounter = document.querySelector('#current');
let totalCounter = document.querySelector('#total');

function showSlide(n) {
    let slides = document.querySelectorAll('.offer__slide');
    if (n > slides.length) {
        currentSlide = 1;
    }
    if (n < 1) {
        currentSlide = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide - 1].style.display = 'block';
}

function updateCounter() {
    currentCounter.innerText = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
    totalCounter.innerText = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
}

function prevSlide() {
    showSlide(currentSlide -= 1);
    updateCounter();
}

function nextSlide() {
    showSlide(currentSlide += 1);
    updateCounter();
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


showSlide(currentSlide);
updateCounter();
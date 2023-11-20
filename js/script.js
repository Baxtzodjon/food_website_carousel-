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
// let currentSlide = 1;
// let totalSlides = document.querySelectorAll('.offer__slide').length;

// let prevButton = document.querySelector('.offer__slider-prev');
// let nextButton = document.querySelector('.offer__slider-next');
// let currentCounter = document.querySelector('#current');
// let totalCounter = document.querySelector('#total');

// function showSlide(n) {
//     let slides = document.querySelectorAll('.offer__slide');
//     if (n > slides.length) {
//         currentSlide = 1;
//     }
//     if (n < 1) {
//         currentSlide = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[currentSlide - 1].style.display = 'block';
// }

// function updateCounter() {
//     currentCounter.innerText = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
//     totalCounter.innerText = totalSlides < 10 ? `0${totalSlides}` : totalSlides;
// }

// function prevSlide() {
//     showSlide(currentSlide -= 1);
//     updateCounter();
// }

// function nextSlide() {
//     showSlide(currentSlide += 1);
//     updateCounter();
// }

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);


// showSlide(currentSlide);
// updateCounter();



// classwork retake slider carousel 
let slides = document.querySelectorAll('.offer__slide')
let prev_btn = document.querySelector(".offer__slider-prev")
let next_btn = document.querySelector(".offer__slider-next")
let current = document.querySelector('#current')
let total = document.querySelector('#total')

let slide_index = 0

slideShow(slide_index)

function slideShow(n) {

    if (n === slides.length) {
        slide_index = 0
    }

    if (n < 0) {
        slide_index = slides.length - 1
    }

    current.innerHTML = slide_index + 1 < 10 ? `0${slide_index + 1}` : slide_index + 1
    total.innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length

    slides.forEach(el => el.classList.add('hide'))
    slides[slide_index].classList.remove('hide')
}

next_btn.onclick = () => {
    slide_index++
    slideShow(slide_index)
}

prev_btn.onclick = () => {
    slide_index--
    slideShow(slide_index)
}



// Homework
let form = document.querySelector('.order__form')
let nameInput = form.querySelector('[name="name"]')
let phoneInput = form.querySelector('[name="phone"]')
let submitButton = form.querySelector('button')

nameInput.onfocus = () => {
    nameInput.style.border = "5px solid rgba(249, 254, 126, .25)"
}

nameInput.onblur = () => {
    let val = +nameInput.value

    if (isNaN(val)) {
        nameInput.style.border = "2px solid blue"
    } else {
        nameInput.style.border = "2px solid red"
    }
}

phoneInput.onfocus = () => {
    phoneInput.style.border = "5px solid rgba(249, 254, 126, .25)"
}

phoneInput.onblur = () => {
    let val = +phoneInput.value

    if (isNaN(val)) {
        phoneInput.style.border = "2px solid blue"
    } else {
        phoneInput.style.border = "2px solid red"
    }
}

submitButton.onclick = () => {
    console.log(`Имя ${nameInput.value}, Телефон: ${phoneInput.value}`);
}
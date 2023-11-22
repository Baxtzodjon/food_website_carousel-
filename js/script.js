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

form.onsubmit = (el) => {
    el.preventDefault()
    console.log({ name: nameInput.value, number: phoneInput.value });
}

// submitButton.onclick = () => {
//     console.log(`Имя ${nameInput.value}, Телефон: ${phoneInput.value}`);
// }


// classwork 
// BMI calculator
let user_data = {
    gender: "woman"
}
let genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
let ratioInputs = document.querySelectorAll('.calculating__choose_medium input')
let resultBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let total_view = document.querySelector('#total_view')

genderBtns.forEach(btn => {
    btn.onclick = () => {
        let gen = btn.dataset.g // dataset все data атрибути который у кнопки есть
        genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        user_data.gender = gen
    }
})

ratioInputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
        // console.log(inp.id, inp.value); // id - забрать id
    }
})

resultBtns.forEach(btn => {
    btn.onclick = () => {
        resultBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let coef = btn.dataset.coeficient

        if (user_data.gender === 'woman') {
            let result = 655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)

            total_view.innerHTML = Math.floor(result * coef)
        } else {
            let result = 66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_data.age)

            total_view.innerHTML = Math.floor(result * coef)
        }

    }
})



// timer
// setInterval(() => {
//     console.log('hello'); // это таймер
// }, 1000) // 1000 это один секунд

// setTimeout(() => {
//     alert('Hi chuvak'); // это тоже таймер только - задержка
// }, 1000)


// seconds_view.innerHTML--

// if(seconds_view.innerHTML == 0) {
//     seconds_view.innerHTML = 59
//     minutes_view.innerHTML--
// }


// Homework
/* let days_view = document.querySelector('#days')
let hours_view = document.querySelector('#hours')
let minutes_view = document.querySelector('#minutes')
let seconds_view = document.querySelector('#seconds')

let days = parseInt(days_view.innerHTML)
let hours = parseInt(hours_view.innerHTML)
let minutes = parseInt(minutes_view.innerHTML)
let seconds = parseInt(seconds_view.innerHTML)

setInterval(() => {
    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        minutes = 59
        hours--
    }

    if (hours < 0) {
        hours = 23
        days = 0
        hours = 0
        minutes = 0
        seconds = 0
    }

    days_view.innerHTML = days
    hours_view.innerHTML = hours
    minutes_view.innerHTML = minutes
    seconds_view.innerHTML = seconds
}, 1000) */


// let days_view = document.querySelector('#days')
// let hours_view = document.querySelector('#hours')
// let minutes_view = document.querySelector('#minutes')
// let seconds_view = document.querySelector('#seconds')

// setInterval(() => {
//     seconds_view.innerHTML--

//     if (seconds_view.innerHTML < 0) {
//         seconds_view.innerHTML = 59
//         minutes_view.innerHTML--
//     }

//     if (minutes_view.innerHTML < 0) {
//         minutes_view.innerHTML = 59
//         hours_view.innerHTML--
//     }

//     if (hours_view.innerHTML < 0) {
//         hours_view.innerHTML = 23
//         days_view.innerHTML = 0
//         hours_view.innerHTML = 0
//         minutes_view.innerHTML = 0
//         seconds_view.innerHTML = 0
//     }
// }, 1000)


// Homework real
let days_view = document.querySelector('#days');
let hours_view = document.querySelector('#hours');
let minutes_view = document.querySelector('#minutes');
let seconds_view = document.querySelector('#seconds');

let days = parseInt(days_view.innerHTML);
let hours = parseInt(hours_view.innerHTML);
let minutes = parseInt(minutes_view.innerHTML);
let seconds = parseInt(seconds_view.innerHTML);

setInterval(() => {
    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    days = 0;
                    hours = 0;
                    minutes = 0;
                    seconds = 0;

                    
                    startConfetti();
                    confetti_happy();
                }
            }
        }
    }

    days_view.innerHTML = days;
    hours_view.innerHTML = hours;
    minutes_view.innerHTML = minutes;
    seconds_view.innerHTML = seconds;
}, 1000);


function startConfetti() {
    const duration = 10 * 100; 

    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3, 
            startVelocity: 30, 
            spread: 360,
            ticks: 200, 
            origin: { x: Math.random(), y: Math.random() * 0.2 - 0.1 }, 
            colors: ['#ff0000', '#00ff00', '#0000ff'] 
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}


function confetti_happy() {

    var end = Date.now() + (15 * 100);
   
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }())
}
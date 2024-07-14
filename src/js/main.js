const navbar = document.querySelector('header');
const section = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('nav ul li a');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    } else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }

    let current = 'home';

    section.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 50) {
          current = section.getAttribute('id');
        }
    });

    navlinks.forEach((item) => {
        item.classList.remove('text-color-secondary');

        if (item.href.includes(current)) {
            item.classList.add("text-color-secondary");
        }
    });
};    

// Tablet menu
let hamburger = document.querySelector('#hamburger')
, menu = document.querySelector('#menu')
, hlink = document.querySelectorAll('#hlink')
, faSolid = document.querySelector('.fa-solid');

hamburger.addEventListener(
    'click',
    () => {
        menu.classList.toggle('hidden');
        faSolid.classList.toggle('fa-xmark')
    }
);

hlink.forEach(
    link => {
        link.addEventListener(
            'click',
            () => {
                menu.classList.toggle('hidden');
                faSolid.classList.toggle('fa-xmark');
            }
        )
    }
);

// отзывы
let userText = document.querySelectorAll('.user-text')
, userPick = document.querySelectorAll('.user-pic');

function showRewiew() {
    for (let item of userPick) item.classList.remove('active-pic');

    for (let item of userText) item.classList.remove('active-text');

    let i = Array.from(userPick).indexOf(event.target);

    userPick[i].classList.add('active-pic');
    userText[i].classList.add('active-text');
}

// card

let toggleBtn = document.getElementById('toggleBtn')

, card_1_front = document.querySelector('#card_1_front')
, card_1_back = document.querySelector('#card_1_back')

, card_2_front = document.querySelector('#card_2_front')
, card_2_back = document.querySelector('#card_2_back')

, card_3_front = document.querySelector('#card_3_front')
, card_3_back = document.querySelector('#card_3_back');

toggleBtn.addEventListener('change', () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');

    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');

    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
})
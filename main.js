let menuToggle = document.querySelector(".navbar__menuon")
let menuImg = document.querySelector(".navbar__menuon img")
let navbar__col2 = document.querySelector(".navbar__col2")
let navbar__col3 = document.querySelector(".navbar__col3")
let navbar = document.querySelector(".navbar")

let toggleRow = document.getElementsByClassName("toggle-row")
let toggleText = document.getElementsByClassName("toggle-text")
let toggleArrow = document.getElementsByClassName("toggle-arrow")

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.mjs'

const swiper = new Swiper('.swiper', {
    loop: true,

    slidesPerView: 1,
    // spaceBetween: 10,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    }
});

menuToggle.addEventListener("click", function () {
    if (navbar__col2.style.maxHeight === "0" || navbar__col2.style.maxHeight === "") {
        menuImg.src = "images/xbtn.png"
        menuImg.style.transform = "scale(0.7)"
        navbar__col2.style.maxHeight = "500px"
        navbar__col2.style.transition = "max-height 0.6s ease-in"
        navbar__col2.style.marginBlock = "1rem"
        navbar__col3.style.maxHeight = "500px"
        navbar__col3.style.transition = "max-height 1.2s ease-in"
        navbar.style.height = "auto"
    } else {
        menuImg.src = "images/bars-3.svg"
        menuImg.style.transform = ""
        navbar__col2.style.maxHeight = ""
        navbar__col2.style.transition = ""
        navbar__col2.style.marginBlock = ""
        navbar__col3.style.maxHeight = ""
        navbar__col3.style.transition = ""
        navbar.style.height = ""
    }
})

const runAccordion = (index) => {
    if (toggleText[index].style.display === "none" || toggleText[index].style.display === "") {
        toggleText[index].style.display = "block"
        toggleArrow[index].style.transform = "rotate(180deg)"
        toggleArrow[index].style.transition = "transform 150ms ease-out"
    } else {
        toggleText[index].style.display = "none"
        toggleArrow[index].style.transform = "none"
    }
}

for (let i = 0; i < toggleRow.length; i++) {
    toggleRow[i].addEventListener("click", () => {
        runAccordion(i)
    })
}

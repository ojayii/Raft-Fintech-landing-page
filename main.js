let menuToggle = document.querySelector(".navbar__menuon")
let menuImg = document.querySelector(".navbar__menuon img")
let navbar__col2 = document.querySelector(".navbar__col2")
let navbar__col3 = document.querySelector(".navbar__col3")
let navbar = document.querySelector(".navbar")

const carousel = document.querySelector('.carousel')
let review = document.getElementsByClassName("review")
let next = document.querySelector(".next")
let previous = document.querySelector(".prev")
let place = 0;
let touchStartX;

let toggleRow = document.getElementsByClassName("toggle-row")
let toggleText = document.getElementsByClassName("toggle-text")
let toggleArrow = document.getElementsByClassName("toggle-arrow")

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

const nextSlide = () => {
    place = (place + 1) % review.length
    //console.log(place)

    for (let i = 0; i < review.length; i++) {
        review[0].style.order = (place + 1) % review.length
        review[1].style.order = (place + 2) % review.length
        review[2].style.order = (place + 3) % review.length
    }
}

const previousSlide = () => {
    place = (place - 1) % 3;
    for (let i = 0; i < review.length; i++) {
        review[0].style.order = (place - 1) % review.length
        review[1].style.order = (place - 2) % review.length
        review[2].style.order = (place - 3) % review.length
    }
}

next.addEventListener("click", () => {
    nextSlide()
})

previous.addEventListener("click", () => {
    previousSlide()
})


carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
        previousSlide()
    } else if (deltaX < -50) {
        nextSlide()
    }
});

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

toggleRow[0].addEventListener("click", () => {
    runAccordion(0)
})

toggleRow[1].addEventListener("click", () => {
    runAccordion(1)
})

toggleRow[2].addEventListener("click", () => {
    runAccordion(2)
})

toggleRow[3].addEventListener("click", () => {
    runAccordion(3)
})

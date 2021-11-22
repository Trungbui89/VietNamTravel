// js of responsive
const menuBtn = document.querySelector(".nav-btn")
const menuBar = document.getElementById("nav")
const brand = document.querySelector(".brand")
const navItems = document.querySelectorAll("header nav .nav-items a")
let menuOpen = false

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
        menuBar.style = "display: flex"
        brand.style = "left: 50%; top: 13.5vh; transform: translateX(-50%); font-size: 56px;"
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
        menuBar.style = "display: none"
        brand.style = " left: 0; top: 6px; transform: translateX(0); font-size: 28px;"
    }
})

//js for video navigate
const btns = document.querySelectorAll("#slide-nav .slide-btn")
const videoSlide = document.querySelectorAll(".home video")
const titles = document.querySelectorAll(".home .content h1")
const links = document.querySelectorAll(".home .content a")

let sliderNav = function(ctl) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })
    videoSlide.forEach((ele) => {
        ele.classList.remove("active")
    })
    titles.forEach((ti) => {
        ti.classList.remove("active")
    })
    links.forEach((link) => {
        link.classList.remove("active")
    })

    btns[ctl].classList.add("active")
    videoSlide[ctl].classList.add("active")
    titles[ctl].classList.add("active")
    links[ctl].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    })
})

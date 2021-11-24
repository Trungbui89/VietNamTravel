const nightTorch = document.getElementById("nt-89")
const icons = document.querySelectorAll(".social-icons a")
let checked = false

nightTorch.addEventListener("click", () => {
    if(!checked) {
        nightTorch.classList.add("active")
        icons.forEach((icon, i) => {
            icon.classList.add("active")
        })
        checked = true
    } else {
        nightTorch.classList.remove("active")
        icons.forEach((icon, i) => {
            icon.classList.remove("active")
        })
        checked = false
    }
})

// for on/off section
const btn = document.querySelector(".location-title .main-btn-content")
const activeAoe = document.querySelector(".location-title")
const fontsize = document.querySelector(".location-title p")
const content = document.querySelector(".location-content")
const wrapper = document.getElementById('wrapper')
const map = document.querySelector("#main .map img")
let secOpen = false

activeAoe.addEventListener("click", () => {
    var mapHeight = map.clientHeight;
    if(!secOpen) {
        secOpen = true
        btn.classList.add('active')
        activeAoe.style = `padding: 24px 80px; width: 60%; left: 45%; top: 61px;`
        fontsize.style = `font-size: 90px`        
        content.style = "height: auto; width:90%; overflow: visible"
        wrapper.style = `height: auto`
    } else {
        secOpen = false
        btn.classList.remove('active')
        activeAoe.style = `padding: 5px 0; width: 9%; left: 28.1%; top: 151px;`
        fontsize.style = `font-size: 12px`
        content.style = `height: ${mapHeight}; width: 0; overflow: hidden`
        wrapper.style = `height: ${mapHeight}`
    }
})

// select location


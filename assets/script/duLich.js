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
let secOpen = true

activeAoe.addEventListener("click", () => {
    if(!secOpen) {
        secOpen = true   
        content.style = `left:0;`
    } else {
        secOpen = false
        content.style = "left:-150%;"
    }
})

// select location

const locSelector = document.querySelectorAll(".location .location-icon")

function showLocation() {
    if(!secOpen) {
        secOpen = true
        content.style = `left:0;`
    } else {
        secOpen = false    
        content.style = `left: -150%;`
    }
    return false
}

for (var i = 0; i < locSelector.length; i++) {
    let checker = []
    locSelector[i].onclick = function(){
        this.classList.forEach((value, i) => {
            checker[i] = value;
        }) 
        if(checker.find((i) => i=="hn") != undefined){showLocation()}
        else {
            alert('Tag này đang được xây dựng, bạn đến thăm Hà Nội trước đi :>')
        }
    }

}
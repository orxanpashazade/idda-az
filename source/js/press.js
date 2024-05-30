let searchBtn = document.querySelector(".search-btn")
let searchInput = document.querySelector(".search-input")
searchBtn.addEventListener("click",()=>{
    searchInput.removeAttribute("hidden")
})
let Header = document.querySelector(".header")
let mobileHeader = document.querySelector(".lower-header")
let burgerBtn = document.querySelector(".burger-btn")
let navigationMobile = document.querySelector(".nav-mobile")
let burgerMenu = document.querySelector(".burger-menu-mobile")
let closeBtnMobile = document.querySelector(".close-button")
burgerBtn.addEventListener("click",()=>{
    navigationMobile.removeAttribute("style")
    Header.setAttribute("style",'display:none;')
})
closeBtnMobile.addEventListener("click",()=>{
    navigationMobile.setAttribute("style",'display:none;')
    Header.removeAttribute("style")
})
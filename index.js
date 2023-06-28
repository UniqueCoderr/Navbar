const nav = document.querySelector(".navbar")
const bottom = document.querySelector(".bottom-container")

console.log(bottom.offsetTop)

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottom.offsetTop - nav.offsetHeight-50){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
})
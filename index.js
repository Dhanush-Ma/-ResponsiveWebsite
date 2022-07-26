
const currentTab = window.location.pathname
const navlinks = document.querySelectorAll("ul a").forEach(link => {
    if(link.href.includes(`${currentTab}`))
    {
        link.classList.add("current-page")
    }
})

window.addEventListener("load",function(){
    const navlinks = document.querySelectorAll("ul a").forEach(link=> {
    if(link.href.includes(`${currentTab}`))
    {
        link.classList.remove("current-page")
    }
})

})


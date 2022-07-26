
const currentTab = window.location.pathname
const navlinks = document.querySelectorAll("ul a").forEach(link => {
    if(link.href.includes(`${currentTab}`))
    {
        link.classList.add("current-page")
    }
})




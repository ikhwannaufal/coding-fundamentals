const nav = document.querySelector(".header")
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add("header--hidden");
    } else {
        nav.classList.remove("header--hidden");
    }

    lastScrollY = window.scrollY;

    window.addEventListener("mousemove", (e) => {
        if (window.scrollY < 20) {
            nav.classList.remove("header--hidden");
        }
        else if (e.clientY < 80) {
            nav.classList.remove("header--hidden");
        }else {
            nav.classList.add("header--hidden");
        }
    })
})
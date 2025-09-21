//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
const serviceMenu = document.querySelector("#navigation .dropdown");
const about = document.querySelector('#About\\ Us')
const contact = document.querySelector('#Contact')
// const projects = document.querySelector('#Projects')
const testimonials = document.querySelector('#Testimonials')
const login = document.querySelector('#Login')

const screenWidth = window.screen.width;



hamburgerMenu.addEventListener('click', function () {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
    }
});

serviceMenu.addEventListener('click', function () {
    const isServiceOpen = serviceMenu.classList.contains("open");
    if (!isServiceOpen) {
        serviceMenu.setAttribute("aria-expanded", true);
        serviceMenu.classList.add("open");
        if (screenWidth < 770) {
            about.style.display = 'none'
            contact.style.display = 'none'
            // projects.style.display = 'none'
            testimonials.style.display = 'none'
            login.style.display = 'none'
            
        }


    } else {
        serviceMenu.setAttribute("aria-expanded", false);
        serviceMenu.classList.remove("open");
        if (screenWidth < 770) {
            about.style.display = 'block'
            contact.style.display = 'block'
            // projects.style.display = 'block'
            testimonials.style.display = 'block'
            login.style.display = 'block'
        }



    }
});
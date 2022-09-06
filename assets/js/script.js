// Make nav menu toggle in mobile version
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
             nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }

}
showMenu('nav-toggle','nav-menu');


// Update active nav link on click
const navLinks = document.querySelectorAll('.nav__link')

function removeAndAddActiveClass(e){
    // remove active class
    navLinks.forEach(link => link.classList.remove('active'))
    
    // add active class on clicked nav link
    e.target.classList.add('active')
    // this.classList.add('active')

    // hide menu bar after selection in mobile version
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLinks.forEach(link => link.addEventListener('click', removeAndAddActiveClass))

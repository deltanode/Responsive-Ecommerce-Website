/* Show Menu  */
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

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //  Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
}

navLink.forEach(n => n.addEventListener('click', linkAction))
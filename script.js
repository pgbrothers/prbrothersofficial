let menuBtn = document.querySelector('.menuBar-logo');
let respNav = document.querySelector('.respNav');
let clsBtn = document.getElementById('clsBtn');

menuBtn.addEventListener('click', () => {
    menuBtn.style.visibility = "hidden";
    clsBtn.style.visibility = "visible";

    if(respNav.style.visibility = "hidden") {
        respNav.style.visibility = "visible";
    } else {
        respNav.style.visibility = "hidden";
    }
})

clsBtn.addEventListener('click', () => {
    menuBtn.style.visibility = "visible";
    clsBtn.style.visibility = "hidden";

    if(respNav.style.visibility = "visible") {
        respNav.style.visibility = "hidden";
    } else {
        respNav.style.visibility = "visible";
    }
})
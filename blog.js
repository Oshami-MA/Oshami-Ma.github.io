var isNavOpen = false;

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    isNavOpen = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    isNavOpen = false;
}

window.addEventListener('click', function (e) {
    var target = e.target;
    if (e.target.id === 'collapse') {
        if (isNavOpen) {
            closeNav()
        } else {
            openNav()
        }
    }
    else if (!target.closest('#mySidenav')) {
        closeNav()
    }
})

images = document.getElementsByClassName('img');
counter = 0;

setInterval(myTimer, 2000);

function myTimer() {
    console.log(counter);
    document.getElementsByClassName('show')[0].classList.remove('show');
    images[counter].classList.add('show');
    if (counter < images.length - 1) {
        counter = counter + 1;
    } else {
        counter = 0;
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');

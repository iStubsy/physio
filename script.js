/***************** OVERLAY *****************/

document.querySelector(".hamburgerMenu").onclick = function () {

    document.querySelector(".overlay").classList.add("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "hidden";

    for (var y = 0; y < document.querySelectorAll(".overlayAnimation").length; y++) {
        for (var x = 0; x < document.querySelectorAll(".overlayAnimation")[y].children.length; x++) {
            //document.querySelectorAll(".overlayAnimation")[x].getElementsByTagName("*")[x].style.opacity = "1";
            //console.log(document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*").length);

            document.querySelectorAll(".overlayAnimation")[y].children[x].classList.add("tro");
            //document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*")[x].style.transition = "1s";
            document.querySelectorAll(".overlayAnimation")[y].children[x].style.transitionDelay = x / 4 + "s";

            //document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*")[x].style.border = "solid 2px green";
            //console.log(document.querySelectorAll(".overlayAnimation")[y].getElementsByTagName("*").length);
        }
    }
}

document.querySelector(".closeButton").onclick = function () {
    document.querySelector(".overlay").classList.remove("overlayShow");
    document.getElementsByTagName("HTML")[0].style.overflow = "auto";

    for (var y = 0; y < document.querySelectorAll(".overlayAnimation").length; y++) {
        for (var x = 0; x < document.querySelectorAll(".overlayAnimation")[y].children.length; x++) {
            document.querySelectorAll(".overlayAnimation")[y].children[x].classList.remove("tro");
            document.querySelectorAll(".overlayAnimation")[y].children[x].style.transitionDelay = "0s";
        }
    }


    for (var i = 0; i < document.querySelectorAll(".hamburgerMenuLine").length; i++) {
        document.querySelectorAll(".hamburgerMenuLine")[i].style.margin = "4px auto";
    }

}


window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");
        document.querySelector(".navigationBar_inner").classList.add("navigationBar-innerScrolled");
        //document.querySelector(".navigationBar_logoText").classList.add("navigationBar_logoText-scrolled");
        document.querySelector(".navigationBar_logoTextItem1").classList.add("navigationBar_logoTextItem1-scrolled");
        document.querySelector(".navigationBar_logoTextItem2").classList.add("navigationBar_logoTextItem2-scrolled");


        document.querySelector(".backToTop").classList.add("backToTopScrolled");
    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
        document.querySelector(".navigationBar_inner").classList.remove("navigationBar-innerScrolled");
        document.querySelector(".navigationBar_logoText").classList.remove("navigationBar_logoText-scrolled");
        document.querySelector(".navigationBar_logoTextItem1").classList.remove("navigationBar_logoTextItem1-scrolled");
        document.querySelector(".navigationBar_logoTextItem2").classList.remove("navigationBar_logoTextItem2-scrolled");

        document.querySelector(".backToTop").classList.remove("backToTopScrolled");
    }
}


document.querySelector(".backToTop").onclick = function () {
    document.querySelector("html").style.scrollBehavior = "smooth";
    document.body.scrollTop = -5; // For Safari
    document.documentElement.scrollTop = -5;
}


/************* SCROLL ANIMATIONS ************/

function moveDownRevealFun() {
    var moveDownReveals = document.querySelectorAll(".fromBottomWrapper");
    for (var i = 0; i < moveDownReveals.length; i++) {
        for (var x = 0; x < moveDownReveals[i].getElementsByTagName("*").length; x++) {
            //moveDownReveals[i].getElementsByTagName("*")[x].classList.add("moveTop");
        }

        var windowHeight = window.innerHeight;
        var elementTop = moveDownReveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            for (var x = 0; x < moveDownReveals[i].getElementsByTagName("*").length; x++) {
                //moveDownReveals[i].getElementsByTagName("*")[x].parentNode.style.overflow = "hidden";
                moveDownReveals[i].getElementsByTagName("*")[x].style.transitionDelay = x / 6 + "s";
                moveDownReveals[i].getElementsByTagName("*")[x].classList.add("active");
            }
        } else {
            for (var x = 0; x < moveDownReveals[i].getElementsByTagName("*").length; x++) {
                //moveDownReveals[i].getElementsByTagName("*")[x].style.transitionDelay = 0 + "s";
                //moveDownReveals[i].getElementsByTagName("*")[x].classList.remove("active");
            }
        }
    }
}

/*
function moveDownRevealFunOverlay() {
    var moveDownReveals = document.querySelectorAll(".moveDownRevealOverlay");
    for (var i = 0; i < moveDownReveals.length; i++) {
        for (var x = 0; x < moveDownReveals[i].getElementsByTagName("*").length; x++) {
            moveDownReveals[i].getElementsByTagName("*")[x].classList.add("moveDownReveals");

        }
        var windowHeight = window.innerHeight;
        var elementTop = moveDownReveals[i].getBoundingClientRect().top;
        var elementVisible = 80;
        if (elementTop < windowHeight - elementVisible) {
            for (var x = 0; x < moveDownReveals[i].getElementsByTagName("*").length; x++) {
                //moveDownReveals[i].getElementsByTagName("*")[x].parentNode.style.overflow = "hidden";
                moveDownReveals[i].getElementsByTagName("*")[x].style.transitionDelay = x / 3 + "s";
                moveDownReveals[i].getElementsByTagName("*")[x].classList.add("active");
            }
        } else {
            moveDownReveals[i].getElementsByTagName("*")[x].classList.remove("active");
        }
    }
}
*/


function moveDownRevealOverlay() {
    var moveDownReveals = document.querySelectorAll(".moveDownRevealOverlay");
    for (var i = 0; i < moveDownReveals.length; i++) {


        var windowHeight = window.innerHeight;
        var elementTop = moveDownReveals[i].getBoundingClientRect().top;
        var elementVisible = 180;
        if (elementTop < windowHeight - elementVisible) {

            moveDownReveals[i].classList.add("active");
        } else {
            //moveDownReveals[i].classList.remove("active");
        }
    }
}

function opacityReveal() {
    var reveals = document.querySelectorAll(".opacityReveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function rotateOpacity() {
    var rotateOpacitySel = document.querySelectorAll(".rotateOpacitySel");
    for (var i = 0; i < rotateOpacitySel.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = rotateOpacitySel[i].getBoundingClientRect().top;
        var elementVisible = 220;
        if (elementTop < windowHeight - elementVisible) {

            rotateOpacitySel[i].classList.add("rotateOpacity");

        } else {
            //rotateOpacitySel[i].classList.remove("rotateOpacity");
        }
    }
}

function moveDown() {
    var moveDown = document.querySelectorAll(".moveDown");
    for (var i = 0; i < moveDown.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = moveDown[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {

            moveDown[i].classList.add("moveDownActive");

        } else {
            //rotateOpacitySel[i].classList.remove("rotateOpacity");
        }
    }
}

function borderReveal() {
    var borderRevealWrapper = document.querySelectorAll(".borderRevealWrapper");

    for (var i = 0; i < borderRevealWrapper.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = borderRevealWrapper[i].getBoundingClientRect().top;
        var elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
            for (var x = 0; x < borderRevealWrapper[i].getElementsByTagName("*").length; x++) {
                //borderRevealWrapper[i].childNodes[3].classList.add("showBorder");
                //borderRevealWrapper[i].childNodes[x].style.display = "none";
                //borderRevealWrapper[i].getElementsByTagName("*")[x].classList.add("showBorder");
                borderRevealWrapper[i].querySelector(".lineRight").classList.add("lineRightShow");
                borderRevealWrapper[i].querySelector(".lineLeft").classList.add("lineLeftShow");
                borderRevealWrapper[i].querySelector(".lineBottom").classList.add("lineBottomShow");
                borderRevealWrapper[i].querySelector(".lineTop").classList.add("lineTopShow");
            }
        } else {
            borderRevealWrapper[i].classList.remove("showBorder");
        }
    }

}

window.addEventListener("scroll", rotateOpacity);
window.addEventListener("scroll", moveDown);
window.addEventListener("scroll", moveDownRevealOverlay);
window.addEventListener("scroll", moveDownRevealFun);
window.addEventListener("scroll", borderReveal);
window.addEventListener("scroll", opacityReveal);
window.addEventListener("load", moveDownRevealOverlay);
window.addEventListener("load", moveDownRevealFun);

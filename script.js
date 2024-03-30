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
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");
        document.querySelector(".navigationBar_inner").classList.add("navigationBar-innerScrolled");
        document.querySelector(".navigationBar_logoText").classList.add("navigationBar_logoText-scrolled");

        document.querySelector(".backToTop").classList.add("backToTopScrolled");
    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
        document.querySelector(".navigationBar_inner").classList.remove("navigationBar-innerScrolled");
        document.querySelector(".navigationBar_logoText").classList.remove("navigationBar_logoText-scrolled");

        document.querySelector(".backToTop").classList.remove("backToTopScrolled");
    }
}


document.querySelector(".backToTop").onclick = function () {
    document.querySelector("html").style.scrollBehavior = "smooth";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}

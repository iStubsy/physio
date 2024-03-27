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

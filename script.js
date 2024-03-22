window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".navigationBar").classList.add("navigationBarScrolled");
        document.querySelector(".navigationBar_inner").classList.add("navigationBar-innerScrolled");
        document.querySelector("#navigationBar_logoText").style.fontSize = "1rem";
    } else {
        document.querySelector(".navigationBar").classList.remove("navigationBarScrolled");
        document.querySelector(".navigationBar_inner").classList.remove("navigationBar-innerScrolled");
        document.querySelector("#navigationBar_logoText").style.fontSize = "1.8rem";
    }
}

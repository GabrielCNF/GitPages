// script.js
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-toggle").addEventListener("click", function () {
        console.log("foi o click")
        document.getElementById("side-nav").classList.toggle("open");
    });

    document.getElementById("side-nav").addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            // Close the menu when a navigation link is clicked
            document.getElementById("side-nav").classList.remove("open");
        }
    });
});

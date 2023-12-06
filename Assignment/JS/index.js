document.querySelector(".menu").addEventListener("click", () => {
    document.querySelector(".navigation-bar").classList.toggle("active");
});

document.querySelector(".navigation-bar-menu-X").addEventListener("click", () => {
    document.querySelector(".navigation-bar").classList.remove("active");
});


/* navigation-bar */

// const menuButton = document.querySelector(".menu");
// const navigationBar = document.querySelector(".navigation-bar");
// const closeButton = document.querySelector(".navigation-bar-menu-X");

// menuButton.addEventListener("click", () => {
//     if (navigationBar.classList.contains("active")) {
//         navigationBar.classList.remove("active");
//     } else {
//         navigationBar.classList.add("active");
//     }
// });

// closeButton.addEventListener("click", () => {
//     navigationBar.classList.remove("active");
// });
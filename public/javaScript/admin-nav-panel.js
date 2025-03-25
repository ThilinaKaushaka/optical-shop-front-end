console.log("XXXXXXX");


let customSidebar = document.querySelector(".custom-sidebar");
let customCloseBtn = document.querySelector("#custom-btn");
let customSearchBtn = document.querySelector(".bx-search");

customCloseBtn.addEventListener("click", () => {
    customSidebar.classList.toggle("open");
    customMenuBtnChange(); // Calling the function (optional)
});

customSearchBtn.addEventListener("click", () => {
    customSidebar.classList.toggle("open");
    customMenuBtnChange(); // Calling the function (optional)
});

// Function to change the sidebar button icon (optional)
function customMenuBtnChange() {
    if (customSidebar.classList.contains("open")) {
        customCloseBtn.classList.replace("bx-menu", "bx-menu-alt-right"); // Replacing the icons class
    } else {
        customCloseBtn.classList.replace("bx-menu-alt-right", "bx-menu"); // Replacing the icons class
    }
}
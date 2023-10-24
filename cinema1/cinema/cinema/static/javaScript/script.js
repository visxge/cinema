const openButton = document.getElementById("openPopup");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closePopup");

openButton.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});
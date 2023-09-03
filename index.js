const button = document.getElementById("button")
button.addEventListener("mouseover", () => {
const top = Math.floor(Math.random() * 500);   
const left = Math.floor(Math.random() * 800);   
button.style.right = left + "px";
button.style.top = left + "px";

});
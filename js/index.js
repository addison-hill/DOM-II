const busImg = document.querySelector('img');
busImg.addEventListener("click", () => {
    busImg.src = "img/black-white-bus.jpg"
})

const bodyChange = document.querySelector("body");
bodyChange.addEventListener("wheel", () => {
    bodyChange.style.backgroundColor = "rebeccapurple";
})

const textChange = document.querySelector("body");
textChange.addEventListener("keypress", () => {
    textChange.style.color = "aqua";
})

const linkChange = document.querySelectorAll("a").forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.color = "gold";
    })
});

const navChange = document.querySelector("header");
navChange.addEventListener("dblclick", () => {
    navChange.style.backgroundColor = "green";
})

const footChange = document.querySelector("footer");
footChange.addEventListener("mousedown", () => {
    footChange.style.backgroundColor = "aqua";
})

const footText = document.querySelector("footer p");
footText.addEventListener("mouseup", () => {
    footText.style.color = "rebeccapurple";
})

const firstImg = document.querySelectorAll("img").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.1)";
        el.style.transition = "all 0.3s";
        stopPropagation();
    })
    el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
        stopPropagation();
    })
});

const resize = document.querySelector("body");
window.addEventListener("resize", () => {
    resize.style.backgroundColor = "slateblue";
})

const stopLink = document.querySelector("a");
stopLink.addEventListener('click', () => {
  event.preventDefault();
});

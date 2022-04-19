
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body_gradient = document.querySelector('#gradient');

function pickGradient() {
    body_gradient.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    css.textContent = body_gradient.style.background + ";";
}
color1.addEventListener('input', pickGradient)

color2.addEventListener('input', pickGradient)


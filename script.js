// declaring the variables
const input = document.querySelector("#desc");
const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const orangeBtn = document.querySelector("#orange");
const yellowBtn = document.querySelector("#yellow");
const purpleBtn = document.querySelector("#purple");
const pinkBtn = document.querySelector("#pink");
const violetBtn = document.querySelector("#violet");
const cyanBtn = document.querySelector("#cyan");
const greyBtn = document.querySelector("#grey");
const para = document.querySelector("#para");
// initialising input value to none
let inputValue = "";
// assigning input value tp para
input.addEventListener('input', () => {
    para.innerText = input.value;
})
// function for each color-buttons
blueBtn.addEventListener('click', () => {
    para.style.color = "blue";
    input.style.color = "blue";
})

redBtn.addEventListener('click', () => {
    para.style.color = "red";
    input.style.color = "red";
})

greenBtn.addEventListener('click', () => {
    para.style.color = "green";
    input.style.color = "green";
})

orangeBtn.addEventListener('click', () => {
    para.style.color = "orange";
    input.style.color = "orange";
})

yellowBtn.addEventListener('click', () => {
    para.style.color = "yellow";
    input.style.color = "yellow";
})

purpleBtn.addEventListener('click', () => {
    para.style.color = "purple";
    input.style.color = "purple";
})

pinkBtn.addEventListener('click', () => {
    para.style.color = "pink";
    input.style.color = "pink";
})

violetBtn.addEventListener('click', () => {
    para.style.color = "violet";
    input.style.color = "violet";
})

cyanBtn.addEventListener('click', () => {
    para.style.color = "cyan";
    input.style.color = "cyan";
})

greyBtn.addEventListener('click', () => {
    para.style.color = "grey";
    input.style.color = "grey";
})
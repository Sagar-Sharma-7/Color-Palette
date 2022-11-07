const palette = document.querySelectorAll(".palette");
const circle = document.querySelectorAll(".circle");
const hexcode = document.querySelectorAll(".hexcode");


const colorList = [
    '#9100B5',
    '#B000DC',
    '#CC00FF',
    '#D52BFF',
    '#E167FF',
    '#E789FF',
    '#EEABFF',
    '#F5CDFF',
]

let n = circle.length;
let i;
for(i = 0; i < n; i++){
    hexcode[i].innerHTML = colorList[i]
    circle[i].style.backgroundColor = colorList[i]
}

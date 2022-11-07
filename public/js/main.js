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
    '#C04100',
    '#CE4500',
    '#E04B00',
    '#EB5103',
    '#FF5600',
    '#FF6618',
    '#FF722B',
    '#FF7B38',
    '#0005A3',
    '#0007C7',
    '#0008E6',
    '#0008FA',
    '#050DFF',
    '#1A21FF',
    '#383FFF',
    '#4D52FF'
]

let n = circle.length;
let i;
for(i = 0; i < n; i++){
    hexcode[i].innerHTML = colorList[i]
    circle[i].style.backgroundColor = colorList[i]
}

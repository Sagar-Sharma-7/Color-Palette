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
    '#4D52FF',
    '#1AB800',
    '#1BBE00',
    '#1DCE00',
    '#1FDD00',
    '#21EE00',
    '#24FF00',
    '#46FF28',
    '#9CFF8C',
    '#00AF9E',
    '#00DEC8',
    '#00F5DD',
    '#06CFBB',
    '#10FFE7',
    '#32FFEA',
    '#57FFEE',
    '#88FFF3',
]

let n = circle.length;
let i;
for(i = 0; i < n; i++){
    hexcode[i].innerHTML = colorList[i]
    circle[i].style.backgroundColor = colorList[i]
}

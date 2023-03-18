// const palette = document.querySelectorAll(".palette");
// const circle = document.querySelectorAll(".circle");
const palette_box = document.querySelectorAll(".palette_box");

// creating palette
palette_box.forEach(item => {
    // creating eight palette in each palette_box
    let x = 0;
    for(;x < 8; x++){
        const palette = document.createElement("div");  
        palette.classList.add('palette');
        item.appendChild(palette);
    }
});
const palette = document.querySelectorAll(".palette");

// creating circle and hexcode paragraph
palette.forEach(item => {
    const circle = document.createElement("div");
    const hexcode = document.createElement("p")
    circle.classList.add("circle");
    hexcode.classList.add("hexcode");
    item.appendChild(circle);
    item.appendChild(hexcode);
});
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
    '#AD0000',
    '#BC0000',
    '#C90000',
    '#DE0000',
    '#EF0707',
    '#FD0707',
    '#FF1B1B',
    '#FF4747',
    '#D11D3C',
    '#E72244',
    '#F92F51',
    '#FF385B',
    '#FF4868',
    '#FF5472',
    '#FD627D',
    '#FB738B',
];


let n = circle.length;
let i;
for(i = 0; i < n; i++){
    hexcode[i].innerHTML = colorList[i];
    circle[i].style.backgroundColor = colorList[i];
    circle[i].title = i
}

circle.forEach(item => {
    item.addEventListener("click", () => {
        console.log(colorList[item.title]);
    })
});
// const palette = document.querySelectorAll(".palette");
// const circle = document.querySelectorAll(".circle");
const palette_box = document.querySelectorAll(".palette_box"),
      cross_btn = document.querySelector("#cross_info_btn"),
      info_box = document.querySelector(".info_box"),
      footer = document.querySelector("footer"),
      footer_text = document.querySelector("#footer_text");

// timer to show info box
const timer = () => {
    setTimeout(() => {
        info_box.style.display = "flex";
    }, 1500);
};

// closing the info box
cross_btn.addEventListener("click", () => {
    info_box.style.display = "none";
});
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
    '#9100B5','#B000DC','#CC00FF','#D52BFF','#E167FF','#E789FF','#EEABFF','#F5CDFF', // Purple
    '#C04100','#CE4500','#E04B00','#EB5103','#FF5600','#FF6618','#FF722B','#FF7B38', // Orange
    '#0005A3','#0007C7','#0008E6','#0008FA','#050DFF','#1A21FF','#383FFF','#4D52FF', // Blue
    '#1AB800','#1BBE00','#1DCE00','#1FDD00','#21EE00','#24FF00','#46FF28','#9CFF8C', // Green
    '#00AF9E','#06CFBB','#00DEC8','#00F5DD','#10FFE7','#32FFEA','#57FFEE','#88FFF3', // Turquoise
    '#AD0000','#BC0000','#C90000','#DE0000','#EF0707','#FD0707','#FF1B1B','#FF4747', // Red
    '#F9F900','#FFFF0D','#FFFF1F','#FCFC34','#FFFF3D','#FFFF5A','#FFFF74','#FFFF92', // Yellow
    '#D11D3C','#E72244','#F92F51','#FF385B','#FF4868','#FF5472','#FD627D','#FB738B', // Pink
    '#3A3A3A','#414141','#4D4D4D','#525252','#606060','#6D6D6D','#898989','#989898', // Grey
    '#834200','#994D00','#B75C00','#D46B03','#F47A00','#FA820A','#FF8F20','#FF9B37', // Brown
];


let n = circle.length;
let i;
for(i = 0; i < n; i++){
    hexcode[i].innerHTML = colorList[i];
    circle[i].style.backgroundColor = colorList[i];
    circle[i].title = colorList[i]
}

circle.forEach(item => {
    item.addEventListener("click", () => {
        navigator.clipboard.writeText(item.title);
        // alert(item.title + " is copied!")
        let copied_text = item.title + " is copied!"
        footer.style.backgroundColor = "#3eff21";
        footer.style.color = "black";
        footer.style.fontWeight = "600"
        footer.innerHTML = copied_text;
        setTimeout(() => {
            footer.style.backgroundColor = "#161616";
            footer.style.color = "#ffffff";
            footer.innerHTML = 'Made with  <i class="fa-solid fa-heart" style="color: #f00a0a;"></i>  by Sagar Sharma'
        }, 2000);
    })
});


// calling timer function
timer();
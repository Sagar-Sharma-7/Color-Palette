const palatte = document.querySelectorAll(".box");
const colorSelected = document.querySelector("#color-inp");
const copyBtn = document.querySelector("#copyBtn");


palatte.forEach((palatteBox) => {
    palatteBox.style.backgroundColor = palatteBox.innerHTML;
})

palatte.forEach((colorPalatte) => {
    colorPalatte.addEventListener("click", () => {
        const hexcode = colorPalatte.innerHTML;
        console.log(hexcode);
        // copy of hexcode
        navigator.clipboard.writeText(hexcode);
        // alerting user 
        if(true){
            colorPalatte.innerHTML = "Copied";
            colorPalatte.style.color = "#1E1E1E";
            setTimeout(() => {
                colorPalatte.innerHTML= hexcode;
                colorPalatte.style.color = "white";
            }, 2000);
        };
    });
});

copyBtn.addEventListener("click", () => {
    const userColor = colorSelected.value.toUpperCase();
    navigator.clipboard.writeText(userColor);

    if(true){
        copyBtn.innerHTML = `${userColor} Copied`
        setTimeout(() => {
            copyBtn.innerHTML = `Copy Hex Code`
        }, 2000);
    }
});




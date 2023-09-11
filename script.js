const imgs= document.getElementById("img-othesrs-carrosel")
const img = document.querySelectorAll("#img-carrosel  img")

let idx=0;

function carrosel(){
    idx++;
    if(idx>1){
        idx=0;
    }

    imgs.style.transform = `translateX(${-idx * 400}px)`;
}

setInterval(carrosel,1500);
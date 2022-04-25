const loadtext=document.querySelector('.loading-text')
const bg=document.querySelector('.background')

let count =0;

let s=setInterval(blur,30)

function blur(){
    count++;

    if(count>99){
        clearInterval(s)
    }
    
    loadtext.innerText=`${count}%`
    loadtext.style.opacity=scale(count,0,100,1,0)
    bg.style.filter =`blur(${scale(count,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
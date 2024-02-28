let items = document.querySelectorAll('.slider-container .item');
let active = 3;

function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}

// second slider
let items2 = document.querySelectorAll('.slider-container2 .item2');
let active2 = 3;

function loadShow2(){
    items2[active2].style.transform = `none`;
    items2[active2].style.zIndex = 1;
    items2[active2].style.filter = 'none';
    items2[active2].style.opacity = 1;
    // show after
    let stt2 = 0;
    for(var i = active2 + 1; i < items2.length; i ++){
        stt2++;
        items2[i].style.transform = `translateX(${120*stt2}px) scale(${1 - 0.2*stt2}) perspective(16px) rotateY(-1deg)`;
        items2[i].style.zIndex = -stt2;
        items2[i].style.filter = 'blur(5px)';
        items2[i].style.opacity = stt2 > 2 ? 0 : 0.6;
    }
     stt2 = 0;
    for(var i = (active2 - 1); i >= 0; i --){
        stt2++;
        items2[i].style.transform = `translateX(${-120*stt2}px) scale(${1 - 0.2*stt2}) perspective(16px) rotateY(1deg)`;
        items2[i].style.zIndex = -stt2;
        items2[i].style.filter = 'blur(5px)';
        items2[i].style.opacity = stt2 > 2 ? 0 : 0.6;
    }
}
loadShow2();
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
next2.onclick = function(){
   active2 = active2 + 1 < items2.length ?  active2 + 1 : active2;
   loadShow2();
}
prev2.onclick = function(){
    active2 = active2 - 1 >= 0 ? active2 -1 : active2;
    loadShow2();
}
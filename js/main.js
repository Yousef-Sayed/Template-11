let cursor = document.querySelector(".coursor");
window.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
});

let bars = document.querySelector(".bars");
let menu = document.querySelector(".mnue");
bars.addEventListener("click",function(){
    menu.style.display="block";
});
let close = document.querySelector(".mnue .top .icon i");
close.addEventListener("click",function(){
    menu.style.display="none";
});
window.addEventListener("resize",function(){
    if(window.innerWidth > 991){
        menu.style.display="none";
    }
});

let chartOne = document.querySelector(".chart-items .container .item-1");
let curOne = document.querySelector(".chart-items .container .chart-item .cursor.one");
chartOne.addEventListener("mousemove",function(e){
    let x = e.clientX;
    let y = e.clientY;
    curOne.style.left = x + "px";
    curOne.style.top = y + "px";
});

let chartTwo = document.querySelector(".chart-items .container .item-2");
let curTwo = document.querySelector(".chart-items .container .chart-item .cursor.two");
chartTwo.addEventListener("mousemove",function(e){
    let x = e.clientX;
    let y = e.clientY;
    curTwo.style.left = x + "px";
    curTwo.style.top = y + "px";
});

let chartThree = document.querySelector(".chart-items .container .item-3");
let curThree = document.querySelector(".chart-items .container .chart-item .cursor.three");
chartThree.addEventListener("mousemove",function(e){
    let x = e.clientX;
    let y = e.clientY;
    curThree.style.left = x + "px";
    curThree.style.top = y + "px";
});

let chartFour = document.querySelector(".chart-items .container .item-4");
let curFour = document.querySelector(".chart-items .container .chart-item .cursor.four");
chartFour.addEventListener("mousemove",function(e){
    let x = e.clientX;
    let y = e.clientY;
    curFour.style.left = x + "px";
    curFour.style.top = y + "px";
});

let chartFive = document.querySelector(".chart-items .container .item-5");
let curFive = document.querySelector(".chart-items .container .chart-item .cursor.five");
chartFive.addEventListener("mousemove",function(e){
    let x = e.clientX;
    let y = e.clientY;
    curFive.style.left = x + "px";
    curFive.style.top = y + "px";
});

let chartSix = document.querySelector(".chart-items .container .item-6");
let curSix = document.querySelector(".chart-items .container .chart-item .cursor.six");
chartSix.addEventListener("mousemove",(e)=>{
    let x=  e.clientX;
    let y=  e.clientY;
    curSix.style.left = x + "px";
    curSix.style.top = y + "px";
});

let chartSeven = document.querySelector(".chart-items .container .item-7");
let curSeven = document.querySelector(".chart-items .container .chart-item .cursor.seven");
chartSeven.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y= e.clientY;
    curSeven.style.left = x + "px";
    curSeven.style.top = y + "px";
});

let chartEight = document.querySelector(".chart-items .container .item-8");
let curEight = document.querySelector(".chart-items .container .chart-item .cursor.eight");
chartEight.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y= e.clientY;
    curEight.style.left = x + "px";
    curEight.style.top = y + "px";
});

let chartNine = document.querySelector(".chart-items .container .item-9");
let curNine = document.querySelector(".chart-items .container .chart-item .cursor.nine");
chartNine.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y= e.clientY;
    curNine.style.left = x + "px";
    curNine.style.top = y + "px";
});

let chartTen = document.querySelector(".chart-items .container .item-10");
let curTen = document.querySelector(".chart-items .container .chart-item .cursor.ten");
chartTen.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y= e.clientY;
    curTen.style.left = x + "px";
    curTen.style.top = y + "px";
});

let chartEleven = document.querySelector(".chart-items .container .item-11");
let curEleven = document.querySelector(".chart-items .container .chart-item .cursor.eleven");
chartEleven.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y= e.clientY;
    curEleven.style.left = x + "px";
    curEleven.style.top = y + "px";
});
let want = document.querySelector(".want-to-buy .container a h3");
let curWant = document.querySelector(".want-to-buy .container a .cursor");
want.addEventListener("mousemove",(e)=>{
    let x= e.clientX;
    let y= e.clientY;
    curWant.style.left = x + "px";
    curWant.style.top = y + "px";
});


let svg = document.querySelector(".chart-items svg");
let svgText = document.querySelectorAll(".chart-items svg text");
let svgdefs = document.querySelectorAll(".chart-items svg defs linearGradient");
svg.addEventListener("click",(e)=>{
    if(e.target.parentElement.dataset.navTarget ==="9"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[5].style.display="block";
        svgText[8].style.opacity="1";
    }else{
        svgdefs[5].style.display="none";
        svgText[8].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="10"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[4].style.display="block";
        svgText[9].style.opacity="1";
    }else{
        svgdefs[4].style.display="none";
        svgText[9].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="11"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[3].style.display="block";
        svgText[10].style.opacity="1";
    }else{
        svgdefs[3].style.display="none";
        svgText[10].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="1"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[13].style.display="block";
        svgText[0].style.opacity="1";
    }else{
        svgdefs[13].style.display="none";
        svgText[0].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="2"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[12].style.display="block";
        svgText[1].style.opacity="1";
    }else{
        svgdefs[12].style.display="none";
        svgText[1].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="3"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[11].style.display="block";
        svgText[2].style.opacity="1";
    }else{
        svgdefs[11].style.display="none";
        svgText[2].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="4"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[10].style.display="block";
        svgText[3].style.opacity="1";
    }else{
        svgdefs[10].style.display="none";
        svgText[3].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="5"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[9].style.display="block";
        svgText[4].style.opacity="1";
    }else{
        svgdefs[9].style.display="none";
        svgText[4].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="6"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[8].style.display="block";
        svgText[5].style.opacity="1";
    }else{
        svgdefs[8].style.display="none";
        svgText[5].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="7"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[7].style.display="block";
        svgText[6].style.opacity="1";
    }else{
        svgdefs[7].style.display="none";
        svgText[6].style.opacity="0";
    }
    if(e.target.parentElement.dataset.navTarget ==="8"){
        svgdefs[0].style.display="block";
        svgdefs[1].style.display="block";
        svgdefs[2].style.display="block";
        svgdefs[6].style.display="block";
        svgText[7].style.opacity="1";
    }else{
        svgdefs[6].style.display="none";
        svgText[7].style.opacity="0";
    }
});

var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide:'true',
        fede: 'true',
        pagination: {
        el: ".swiper-pagination",
            clickable: true,
            dynamicBullets:true,
        },
        breakpoints: {
            0:{
                slidesPerView: 1,
            },
            767:{
                slidesPerView: 2,
            },
            991:{
                slidesPerView: 3,
            },
        },
});

let circle=document.querySelector("#circle")
const btn=document.querySelector("#btn")
const svglem=document.querySelector("svg")

let tl=gsap.timeline();


window.addEventListener("mousemove",function(details){
    console.log(details)
    let xval=details.clientX;
    let yval=details.clientY;

    setTimeout(function(){
        circle.style.top=`${yval}px`;
        circle.style.left=`${xval}px`;
    },100)

    
})
btn.addEventListener("click",function(){
    tl.reverse();
    setTimeout(function(){
        svglem.classList.add("animate");

        
    },3500)
})




tl
.from('#wrapper',{
    duration:4,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:1.5,
    width:0,
    ease:'Expo.easeInOut'

},`-=2.5`)
.from('#blackcard',{
    duration:1.5,
    x:70,
    ease:'Expo.easeInOut',
    opacity:0

},`-=1.5`)
.from('#line',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0

},`-=1`)
.from('#line .line',{
    duration:2,
    width:0,
    ease:'Expo.easeInOut',
    opacity:0

},`-=1`)
.from('#blackcard p',{
    duration:1,
    y:50,
    ease:'Expo.easeInOut',
    opacity:0

},`-=1`)
.from('#text',{
    duration:2,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0

},`-=1`)